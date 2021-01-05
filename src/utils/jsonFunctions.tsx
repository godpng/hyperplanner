/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  campusDict,
  typeDict,
  CourseType,
  hyperToJson,
  majorToElecDept,
  concToHumDept,
  techDepts,
} from '../static/infoLists'
import WritIntens from '../static/writIntens.json'

type Stats = {
  total: number
  rem: number
  avg: number
  avgRem: any
  pe: number
  majorElec: number
  depth: number
  breadth: number
  humElec: number
  muddHum: number
  writ: number
  majorChecks: number[]
  majorReqTable: { [code: string]: number[] }
  coreChecks: number[]
  coreReqTable: { [code: string]: number[] }
}

function validate(course: any) {
  const validLength = Object.keys(course).length === 8
  const validActive =
    course.active !== 'undefined' && typeof course.active === 'boolean'
  const validTerm =
    course.term !== 'undefined' &&
    /((fall)|(spring)|(summer))[1-4]$/.test(course.term)
  const validTitle =
    course.title !== 'undefined' && typeof course.title === 'string'
  const validCode =
    course.code !== 'undefined' && typeof course.code === 'string'
  const validCredits =
    course.credits !== 'undefined' && typeof course.credits === 'number'
  const validType =
    course.type !== 'undefined' && Object.keys(typeDict).includes(course.type)
  const validCampus =
    course.campus !== 'undefined' &&
    Object.keys(campusDict).includes(course.campus)
  const validWrit =
    course.writ_inten !== 'undefined' && typeof course.writ_inten === 'boolean'
  return (
    validLength &&
    validActive &&
    validTerm &&
    validTitle &&
    validCode &&
    validCredits &&
    validType &&
    validCampus &&
    validWrit
  )
}

const calculateTerm = (enrollYear: number, termStartDate: string): string => {
  const split = termStartDate.split('-')
  const year = parseInt(split[0], 10)
  const month = parseInt(split[1], 10)
  let sem
  if (month < 6) {
    sem = 'spring'
    return sem + (year - enrollYear).toString()
  }
  sem = 'fall'
  return sem + (year - enrollYear + 1).toString()
}

const isWritInten = (code: string): boolean => {
  /* eslint-disable-next-line */
  return WritIntens.hasOwnProperty(code)
}

const isPe = (code: string) => {
  return /^(PE)/.test(code)
}

const isCoreReq = (
  code: string,
  coreReqTable: { [code: string]: number[] },
): boolean => {
  /* eslint-disable-next-line */
  return coreReqTable.hasOwnProperty(code)
}

const isMajorReq = (
  code: string,
  dept: string,
  credits: number,
  majorReqTable: { [code: string]: number[] },
): boolean => {
  /* eslint-disable */
  // Handle major/core checks array
  return (
    majorReqTable.hasOwnProperty(code) ||
    (majorReqTable.hasOwnProperty(dept) && credits === 3)
  )
  /* eslint-enable */
}

const isMajorElec = (dept: string, major: string): boolean => {
  const majorKey = major as keyof typeof majorToElecDept
  return majorToElecDept[majorKey].includes(dept)
}

const isHumDepth = (dept: string, concentration: string): boolean => {
  const concKey = concentration as keyof typeof concToHumDept
  return concToHumDept[concKey].includes(dept)
}

const isHumBreadth = (dept: string, concentration: string): boolean => {
  return !isHumDepth(dept, concentration) && !techDepts.has(dept)
}

const determineCourseType = (
  course: CourseType,
  statsContext: Stats,
  userContext: any,
): string => {
  const pattern = /[\D]*/
  /* eslint-disable-next-line */
  const dept = course.code.match(pattern)![0] as string
  let message = 'undecided'
  if (isPe(course.code)) {
    message = 'pe'
  } else if (isCoreReq(course.code, statsContext.coreReqTable)) {
    message = 'core_req'
  } else if (
    isMajorReq(course.code, dept, course.credits, statsContext.majorReqTable)
  ) {
    message = 'major_req'
  } else if (isMajorElec(dept, userContext.major)) {
    message = 'major_elec'
  } else if (isHumDepth(dept, userContext.concentration)) {
    message = 'hum_depth'
  } else if (isHumBreadth(dept, userContext.concentration)) {
    message = 'hum_breadth'
  }
  return message
}

const getCampusName = (hypCourse: any): string => {
  // Two possible locations of campus name
  const possible1 =
    hyperToJson[hypCourse.courseMutualExclusionKey[3].toLowerCase()]
  if (possible1 !== undefined) {
    return possible1
  }
  const possible2 =
    hyperToJson[
      hypCourse.courseSchedule[0].scheduleLocation.split(' ')[0].toLowerCase()
    ]
  if (possible2 !== undefined) {
    return possible2
  }
  // Default to hmc if neither work
  return 'hmc'
}

export const validJson = (jsonStr: string): [boolean, any] => {
  try {
    const json = JSON.parse(jsonStr)
    if (!Array.isArray(json) || json.length === 0) {
      return [false, null]
    }
    for (let i = 0; i < json.length; i += 1) {
      if (!validate(json[i])) {
        return [false, null]
      }
    }
    return [true, json]
  } catch {
    return [false, null]
  }
}

export const cleanHyper = (
  jsonStr: string,
  stats: Stats,
  users: any,
): [boolean, any] => {
  try {
    const json = JSON.parse(jsonStr)
    if (!Array.isArray(json) || json.length === 0) {
      return [false, null]
    }
    const term = calculateTerm(
      users.enroll,
      json[0].courseSchedule[0].scheduleStartDate,
    )

    const newJson = []
    for (let i = 0; i < json.length; i += 1) {
      const curCourse = json[i]
      const courseEntry = {} as CourseType
      courseEntry.active = curCourse.selected
      courseEntry.term = term
      courseEntry.title = curCourse.courseName
      courseEntry.credits = parseFloat(curCourse.courseCredits)
      courseEntry.campus = getCampusName(curCourse)
      const subject = curCourse.courseMutualExclusionKey[0]
      const num = curCourse.courseMutualExclusionKey[1]
      const numStr = num < 100 ? `0${num.toString()}` : num.toString()
      courseEntry.code = subject + numStr
      courseEntry.writ_inten = isWritInten(courseEntry.code)
      courseEntry.type = determineCourseType(courseEntry, stats, users)
      if (!validate(courseEntry)) {
        return [false, null]
      }
      newJson.push(courseEntry)
    }
    return [true, newJson]
  } catch {
    return [false, null]
  }
}

const getTermCourses = (
  term: string,
  idx: number,
  coursesJson: any,
  stats: Stats,
  users: any,
): CourseType[] => {
  const courses = []
  const termCourses = coursesJson[idx][term]
  for (let j = 0; j < termCourses.length; j += 1) {
    const curCourse = termCourses[j]
    const newCourse = {} as CourseType
    newCourse.active = true
    newCourse.term = `${term.toLowerCase()}${idx + 1}`
    newCourse.title = curCourse.title
    newCourse.code = curCourse.code
    newCourse.credits = curCourse.credits
    newCourse.type = determineCourseType(curCourse, stats, users)
    newCourse.campus = curCourse.campus
    newCourse.writ_inten = isWritInten(curCourse.code)
    courses.push(newCourse)
  }
  return courses
}

export const getCoursesFromJson = (
  coursesJson: any,
  stats: Stats,
  user: any,
): CourseType[] => {
  let courses = [] as CourseType[]
  for (let i = 0; i < coursesJson.length; i += 1) {
    const fallCourses = getTermCourses('Fall', i, coursesJson, stats, user)
    courses = courses.concat(fallCourses)
    const springCourses = getTermCourses('Spring', i, coursesJson, stats, user)
    courses = courses.concat(springCourses)
    const summerCourses = getTermCourses('Summer', i, coursesJson, stats, user)
    courses = courses.concat(summerCourses)
  }
  return courses
}
