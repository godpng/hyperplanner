import { Courses } from '../generated/graphql'

export const schools = [
  {
    value: 'hmc',
    label: 'Harvey Mudd College',
  },
]

interface StringToString {
  [input: string]: string
}

export const schoolDict: StringToString = {
  hmc: 'Harvey Mudd College',
  'Harvey Mudd College': 'hmc',
}

export const hyperToJson: StringToString = {
  hm: 'hmc',
  cm: 'cmc',
  po: 'po',
  pz: 'pz',
  sc: 'sc',
}

export const majors = [
  {
    value: 'bio',
    label: 'Biology',
  },
  {
    value: 'bio_chem',
    label: 'Joint Biology/Chemistry',
  },
  {
    value: 'chem',
    label: 'Chemistry',
  },
  {
    value: 'cs',
    label: 'Computer Science',
  },
  {
    value: 'cs_math',
    label: 'Joint Computer Science/Mathematics',
  },
  {
    value: 'engr',
    label: 'Engineering',
  },
  {
    value: 'math',
    label: 'Mathematics',
  },
  {
    value: 'math_phys',
    label: 'Joint Mathematics/Physics',
  },
  {
    value: 'mcb',
    label: 'Mathematical/Computational Biology',
  },
  {
    value: 'phys',
    label: 'Physics',
  },
]

export const techDepts = new Set([
  'ASTR',
  'BIOL',
  'CHEM',
  'CSCI',
  'CSMT',
  'DS',
  'ENGR',
  'GEOL',
  'MATH',
  'MCBI',
  'NEUR',
  'PHYS',
])

export const majorDict: StringToString = {
  bio: 'Biology',
  Biology: 'bio',
  bio_chem: 'Joint Biology/Chemistry',
  'Joint Biology/Chemistry': 'bio_chem',
  chem: 'Chemistry',
  Chemistry: 'chem',
  cs: 'Computer Science',
  'Computer Science': 'cs',
  cs_math: 'Joint Computer Science/Mathematics',
  'Joint Computer Science/Mathematics': 'cs_math',
  engr: 'Engineering',
  Engineering: 'engr',
  math: 'Mathematics',
  Mathematics: 'math',
  math_phys: 'Joint Mathematics/Physics',
  'Joint Mathematics/Physics': 'math_phys',
  mcb: 'Mathematical/Computational Biology',
  'Mathematical/Computational Biology': 'mcb',
  phys: 'Physics',
  Physics: 'phys',
}

export const majorToElecDept = {
  bio: ['BIOL'],
  bio_chem: ['BIOL'],
  chem: ['CHEM'],
  cs: ['CSCI'],
  cs_math: ['CSCI', 'MATH'],
  engr: ['ENGR'],
  math: ['MATH'],
  math_phys: ['MATH', 'PHYS'],
  mcb: ['MATH', 'CSCI'],
  phys: ['PHYS'],
}

export const concToHumDept = {
  'American Studies': ['AMST'],
  Anthropology: ['ANTH'],
  Art: ['ART', 'ARHI'],
  'Art History': ['ART', 'ARHI'],
  'Asian American Studies': ['ASAM'],
  'Asian Studies': ['ASIA'],
  'Africana Studies': ['AFRI'],
  'Chicanx/Latinx Studies': ['CHST'],
  Classics: ['CLAS'],
  Dance: ['DANC'],
  Economics: ['ECON'],
  Education: ['EDUC'],
  'Environmental Analysis': ['EA'],
  'European Studies': ['HIST'],
  'Foreign Languages': [
    'ARBC',
    'CHIN',
    'FREN',
    'GERM',
    'GREEK',
    'ITAL',
    'JAPN',
    'KORE',
    'LATN',
    'LGCS',
    'PORT',
    'RUSS',
    'SPAN',
  ],
  'Gender Studies': ['GWS'],
  Geography: ['GEOG', 'EA'],
  'German Studies': ['GERM'],
  History: ['HIST'],
  'Holocaust & Human Rights': ['PHIL'],
  'Jewish Studies': ['RLST'],
  'Latin American Studies': ['LAST', 'HIST'],
  Linguistics: ['ANTH', 'LGCS'],
  Literature: ['LIT', 'HIST'],
  'Media Studies': ['MS'],
  'Middle Eastern Studies': ['MES'],
  Music: ['MUS'],
  Philosophy: ['PHIL', 'PPE'],
  'Political Studies': ['GOVT', 'POLI', 'PPE'],
  Psychology: ['PSYC'],
  'Public Policy Analysis': ['GOVT', 'POLI', 'PPA'],
  'Religious Studies': ['RLST'],
  'Science, Technology, & Society': ['STS'],
  'Secular Studies': ['SOC'],
  Sociology: ['SOC', 'SOSC'],
  Theatre: ['THEA'],
  'Writing and Rhetoric': ['WRIT', 'ENGL'],
}

export const enrollYears = [
  {
    value: 2017,
  },
  {
    value: 2018,
  },
  {
    value: 2019,
  },
  {
    value: 2020,
  },
  {
    value: 2021,
  },
  {
    value: 2022,
  },
]

export const concentrations = [
  {
    value: 'American Studies',
  },
  {
    value: 'Anthropology',
  },
  {
    value: 'Art',
  },
  {
    value: 'Art History',
  },
  {
    value: 'Asian American Studies',
  },
  {
    value: 'Asian Studies',
  },
  {
    value: 'Africana Studies',
  },
  {
    value: 'Chicanx/Latinx Studies',
  },
  {
    value: 'Classics',
  },
  {
    value: 'Dance',
  },
  {
    value: 'Economics',
  },
  {
    value: 'Education',
  },
  {
    value: 'Environmental Analysis',
  },
  {
    value: 'European Studies',
  },
  {
    value: 'Foreign Languages',
  },
  {
    value: 'Gender Studies',
  },
  {
    value: 'Geography',
  },
  {
    value: 'German Studies',
  },
  {
    value: 'History',
  },
  {
    value: 'Holocaust & Human Rights',
  },
  {
    value: 'Jewish Studies',
  },
  {
    value: 'Latin American Studies',
  },
  {
    value: 'Linguistics',
  },
  {
    value: 'Literature',
  },
  {
    value: 'Media Studies',
  },
  {
    value: 'Middle Eastern Studies',
  },
  {
    value: 'Music',
  },
  {
    value: 'Philosophy',
  },
  {
    value: 'Political Studies',
  },
  {
    value: 'Psychology',
  },
  {
    value: 'Public Policy Analysis',
  },
  {
    value: 'Religious Studies',
  },
  {
    value: 'Science, Technology, & Society',
  },
  {
    value: 'Secular Studies',
  },
  {
    value: 'Sociology',
  },
  {
    value: 'Theatre',
  },
  {
    value: 'Writing and Rhetoric',
  },
]

export const campuses = [
  {
    value: 'hmc',
    label: 'Harvey Mudd College',
  },
  {
    value: 'sc',
    label: 'Scripps College',
  },
  {
    value: 'po',
    label: 'Pomona College',
  },
  {
    value: 'cmc',
    label: 'Claremont McKenna College',
  },
  {
    value: 'pz',
    label: 'Pitzer College',
  },
  {
    value: 'kgi',
    label: 'Keck Graduate Institute',
  },
  {
    value: 'cgu',
    label: 'Claremont Graduate University',
  },
]

export const semesters = [
  {
    value: 'fall1',
    label: 'Year 1 Fall',
  },
  {
    value: 'spring1',
    label: 'Year 1 Spring',
  },
  {
    value: 'summer1',
    label: 'Year 1 Summer',
  },
  {
    value: 'fall2',
    label: 'Year 2 Fall',
  },
  {
    value: 'spring2',
    label: 'Year 2 Spring',
  },
  {
    value: 'summer2',
    label: 'Year 2 Summer',
  },
  {
    value: 'fall3',
    label: 'Year 3 Fall',
  },
  {
    value: 'spring3',
    label: 'Year 3 Spring',
  },
  {
    value: 'summer3',
    label: 'Year 3 Summer',
  },
  {
    value: 'fall4',
    label: 'Year 4 Fall',
  },
  {
    value: 'spring4',
    label: 'Year 4 Spring',
  },
  {
    value: 'summer4',
    label: 'Year 4 Summer',
  },
]

export const campusDict: StringToString = {
  hmc: 'Harvey Mudd College',
  sc: 'Scripps College',
  po: 'Pomona College',
  cmc: 'Claremont McKenna College',
  pz: 'Pitzer College',
  kgi: 'Keck Graduate Institute',
  cgu: 'Claremont Graduate University',
}

export const credits = [
  {
    value: '0.0',
  },
  {
    value: '0.5',
  },
  {
    value: '1.0',
  },
  {
    value: '1.5',
  },
  {
    value: '2.0',
  },
  {
    value: '2.5',
  },
  {
    value: '3.0',
  },
  {
    value: '3.5',
  },
  {
    value: '4.0',
  },
]

export const types = [
  {
    value: 'major_req',
    label: 'Major Requirement',
  },
  {
    value: 'major_elec',
    label: 'Major Elective',
  },
  {
    value: 'core_req',
    label: 'Core Requirement',
  },
  {
    value: 'hum_depth',
    label: 'Humanities Depth',
  },
  {
    value: 'hum_breadth',
    label: 'Humanities Breadth',
  },
  {
    value: 'hum_elec',
    label: 'Humanities Elective',
  },
  {
    value: 'pe',
    label: 'Physical Education',
  },
  {
    value: 'other',
    label: 'Other',
  },
  {
    value: 'undecided',
    label: 'Undecided',
  },
]

export const typeDict: StringToString = {
  major_req: 'Major Requirement',
  major_elec: 'Major Elective',
  core_req: 'Core Requirement',
  hum_depth: 'Humanities Depth',
  hum_breadth: 'Humanities Breadth',
  hum_elec: 'Humanities Elective',
  pe: 'Physical Education',
  other: 'Other',
  undecided: 'Undecided',
}

export const bools = [
  {
    value: true,
    label: 'True',
  },
  {
    value: false,
    label: 'False',
  },
]

export type CourseType = {
  __typename?: 'courses' | undefined
} & Pick<
  Courses,
  | 'term'
  | 'title'
  | 'code'
  | 'credits'
  | 'type'
  | 'campus'
  | 'writ_inten'
  | 'active'
>

export const courseSort = (c1: CourseType, c2: CourseType): number => {
  let val = -c1.type.localeCompare(c2.type)
  // Types are equal so compare cdes next
  if (!val) {
    val = c1.code.localeCompare(c2.code)
  }
  return val
}

export const firstYear: CourseType[] = [
  {
    campus: 'hmc',
    code: 'CSCI5/42',
    credits: 3.0,
    term: 'fall1',
    title: 'Intro to CS',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH30',
    credits: 3.0,
    term: 'fall1',
    title: 'Calculus',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS023',
    credits: 1.5,
    term: 'fall1',
    title: 'Special Relativity',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CHEM023A',
    credits: 3.0,
    term: 'fall1',
    title: 'Chemistry in the Modern World 1',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CHEM024',
    credits: 1,
    term: 'fall1',
    title: 'Chemistry Laboratory',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'WRIT001',
    credits: 1.5,
    term: 'fall1',
    title: 'Intro to Academic Writing',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'cmc',
    code: 'PE056',
    credits: 1.0,
    term: 'fall1',
    title: 'Soccer',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'BIOL052',
    credits: 3.0,
    term: 'spring1',
    title: 'Intro to Biology',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH073',
    credits: 3.0,
    term: 'spring1',
    title: 'Linear Algebra',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CHEM023B',
    credits: 1.5,
    term: 'spring1',
    title: 'Chemistry in the Modern World II',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS024',
    credits: 3.0,
    term: 'spring1',
    title: 'Mechanics & Wave Motion',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'BIOL023',
    credits: 1.0,
    term: 'spring1',
    title: 'Biology Laboratory',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA010',
    credits: 3.0,
    term: 'spring1',
    title: 'Critical Inquiry',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 3.0,
    term: 'spring1',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
]

export const csSchedule: CourseType[] = firstYear.concat([
  {
    campus: 'hmc',
    code: 'MATH 60/65',
    credits: 3.0,
    term: 'fall2',
    title: 'Multivar',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS051',
    credits: 3.0,
    term: 'fall2',
    title: 'E&M',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS050',
    credits: 1.0,
    term: 'fall2',
    title: 'Physics Laboratory',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PE056',
    credits: 1.0,
    term: 'fall2',
    title: 'Soccer',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH055',
    credits: 3.0,
    term: 'fall2',
    title: 'Discrete Math',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI060',
    credits: 3.0,
    term: 'fall2',
    title: 'Principles of CS',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall2',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PE',
    credits: 1.0,
    term: 'spring2',
    title: 'PE',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI070',
    credits: 3.0,
    term: 'spring2',
    title: 'Data Structures & Program Development',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI081',
    credits: 3.0,
    term: 'spring2',
    title: 'Computability & Logic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring2',
    title: 'HSA',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring2',
    title: 'HSA',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 3.0,
    term: 'spring2',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENG079',
    credits: 3.0,
    term: 'fall3',
    title: 'STEMs',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI105',
    credits: 3.0,
    term: 'fall3',
    title: 'Computer Systems',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI140',
    credits: 3.0,
    term: 'fall3',
    title: 'Algorithms',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI195',
    credits: 0.5,
    term: 'fall3',
    title: 'CS Colloquium',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall3',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 3.0,
    term: 'fall3',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI121',
    credits: 3.0,
    term: 'spring3',
    title: 'Software Development',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI131',
    credits: 3.0,
    term: 'spring3',
    title: 'Programming Languages',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI195',
    credits: 0.5,
    term: 'spring3',
    title: 'CS Colloquium',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring3',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring3',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 3.0,
    term: 'spring3',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI183',
    credits: 3.0,
    term: 'fall4',
    title: 'CS Clinic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI195',
    credits: 0.5,
    term: 'fall4',
    title: 'CS Colloquium',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI',
    credits: 3.0,
    term: 'fall4',
    title: 'CS elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI',
    credits: 3.0,
    term: 'fall4',
    title: 'CS elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall4',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall4',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI184',
    credits: 3.0,
    term: 'spring4',
    title: 'CS Clinic',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI',
    credits: 3.0,
    term: 'spring4',
    title: 'CS elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI195',
    credits: 0.5,
    term: 'spring4',
    title: 'CS Colloquium',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring4',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring4',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 3.0,
    term: 'spring4',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 1.5,
    term: 'spring4',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
])

export const engSchedule: CourseType[] = firstYear.concat([
  {
    campus: 'hmc',
    code: 'MATH082',
    credits: 3.0,
    term: 'fall2',
    title: 'Diff Eq',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS051',
    credits: 3.0,
    term: 'fall2',
    title: 'E & M',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS050',
    credits: 1.0,
    term: 'fall2',
    title: 'Physics Lab',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR079',
    credits: 3.0,
    term: 'fall2',
    title: 'STEMs',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: 'PE',
    credits: 1.0,
    term: 'fall2',
    title: 'PE',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR004',
    credits: 4.0,
    term: 'fall2',
    title: 'Intro to Eng',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall2',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: 'PE',
    credits: 1.0,
    term: 'spring2',
    title: 'PE',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR072',
    credits: 1.5,
    term: 'spring2',
    title: 'Engineering Math',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR080',
    credits: 3.0,
    term: 'spring2',
    title: 'Experimental Engineering',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR082',
    credits: 3.0,
    term: 'spring2',
    title: 'Chemical and Thermal Processes',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring2',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring2',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR083',
    credits: 3.0,
    term: 'fall3',
    title: 'Continuum Mechanics',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR084',
    credits: 3.0,
    term: 'fall3',
    title: 'Electronic and Magnetic Circuits and Devices',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR101',
    credits: 3.0,
    term: 'fall3',
    title: 'Advanced Systems Engineering',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall3',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall3',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 1.5,
    term: 'fall3',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR102',
    credits: 3.0,
    term: 'spring3',
    title: 'Advanced Systems Engineering',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR111',
    credits: 3.0,
    term: 'spring3',
    title: 'Clinic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR085',
    credits: 3.0,
    term: 'spring3',
    title: 'Digital Electronics and Computer Engineering',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR086',
    credits: 3.0,
    term: 'spring3',
    title: 'Materials Engineering',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR022',
    credits: 0.5,
    term: 'spring3',
    title: 'Engineering Seminar',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring3',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR112',
    credits: 3.0,
    term: 'fall4',
    title: 'Clinic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: '',
    credits: 3.0,
    term: 'fall4',
    title: 'Tech Elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: '',
    credits: 3.0,
    term: 'fall4',
    title: 'Tech Elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall4',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall4',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 1.5,
    term: 'fall4',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR113',
    credits: 3.0,
    term: 'spring4',
    title: 'Clinic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR124',
    credits: 0.5,
    term: 'spring4',
    title: 'Engineering Seminar',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: '',
    credits: 3.0,
    term: 'spring4',
    title: 'Tech Elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring4',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring4',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 3.0,
    term: 'spring4',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
])

export const csmathSchedule: CourseType[] = firstYear.concat([
  {
    campus: 'hmc',
    code: 'MATH082',
    credits: 3.0,
    term: 'fall2',
    title: 'Diff Eq',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS051',
    credits: 3.0,
    term: 'fall2',
    title: 'E & M',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH055',
    credits: 3.0,
    term: 'fall2',
    title: 'Discrete Math',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI060',
    credits: 3.0,
    term: 'fall2',
    title: 'Principles of CS',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall2',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 1.0,
    term: 'fall2',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PE',
    credits: 1.0,
    term: 'spring2',
    title: 'PE',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS050',
    credits: 1.0,
    term: 'spring2',
    title: 'Physics Laboratory',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH131',
    credits: 3.0,
    term: 'spring2',
    title: 'Math Analysis I',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI070',
    credits: 3.0,
    term: 'spring2',
    title: 'Data Structures & Program Development',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring2',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring2',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 2.0,
    term: 'spring2',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR079',
    credits: 3.0,
    term: 'fall3',
    title: 'STEMs',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI081',
    credits: 3.0,
    term: 'fall3',
    title: 'Computability & Logic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI',
    credits: 3.0,
    term: 'fall3',
    title: 'CS elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH171',
    credits: 3.0,
    term: 'fall3',
    title: 'Abstract Algebra I',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH198',
    credits: 1.0,
    term: 'fall3',
    title: 'Math Forum',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall3',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI140',
    credits: 3.0,
    term: 'spring3',
    title: 'Algorithms',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH',
    credits: 3.0,
    term: 'spring3',
    title: 'Math elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH199',
    credits: 0.5,
    term: 'spring3',
    title: 'Math Colloquium',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring3',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring3',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 3.0,
    term: 'spring3',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PE',
    credits: 1.0,
    term: 'spring3',
    title: 'PE',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI183',
    credits: 3.0,
    term: 'fall4',
    title: 'CS Clinic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI131',
    credits: 3.0,
    term: 'fall4',
    title: 'Programming Languages',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI/MATH',
    credits: 3.0,
    term: 'fall4',
    title: 'Major Elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI195',
    credits: 0.5,
    term: 'fall4',
    title: 'CS Colloquium',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall4',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'fall4',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: '',
    code: '',
    credits: 2.0,
    term: 'fall4',
    title: 'elective',
    type: '',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI184',
    credits: 3.0,
    term: 'spring4',
    title: 'CS Clinic',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI/MATH',
    credits: 3.0,
    term: 'spring4',
    title: 'Major elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI/MATH',
    credits: 3.0,
    term: 'spring4',
    title: 'Major elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI195',
    credits: 0.5,
    term: 'spring4',
    title: 'CS Colloquium',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring4',
    title: 'HSA elective',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA',
    credits: 3.0,
    term: 'spring4',
    title: 'HSA elective',
    type: 'hum_depth',
    writ_inten: true,
    active: true,
  },
])

export const placeholderCourses: CourseType[] = [
  {
    campus: 'cmc',
    code: 'PE056',
    credits: 1.0,
    term: 'fall1',
    title: 'Soccer',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CHEM023',
    credits: 3.0,
    term: 'fall1',
    title: 'Chemistry',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI005',
    credits: 3.0,
    term: 'fall1',
    title: 'Intro to CS',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH030',
    credits: 1.5,
    term: 'fall1',
    title: 'Calculus',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH035',
    credits: 1.5,
    term: 'fall1',
    title: 'Statistics',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS023',
    credits: 1.5,
    term: 'fall1',
    title: 'Physics',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'WRIT001',
    credits: 1.5,
    term: 'fall1',
    title: 'Writing',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'cmc',
    code: 'PE056',
    credits: 1.0,
    term: 'spring1',
    title: 'Soccer',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI060',
    credits: 3.0,
    term: 'spring1',
    title: 'CS Principles',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'BIOL052',
    credits: 3.0,
    term: 'spring1',
    title: 'Biology',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'HSA010',
    credits: 3.0,
    term: 'spring1',
    title: 'Critical Inquiry',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH040',
    credits: 1.5,
    term: 'spring1',
    title: 'Linear Algebra',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH045',
    credits: 1.5,
    term: 'spring1',
    title: 'Differential Equations',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI070',
    credits: 3.0,
    term: 'fall2',
    title: 'Data Structures',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH055',
    credits: 3.0,
    term: 'fall2',
    title: 'Discrete Mathematics',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ECON104',
    credits: 3.0,
    term: 'fall2',
    title: 'Financial Economics',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'ENGR079',
    credits: 3.0,
    term: 'fall2',
    title: 'Engineering',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'MATH189',
    credits: 1.0,
    term: 'spring2',
    title: 'Data Analytics',
    type: 'other',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI105',
    credits: 3.0,
    term: 'spring2',
    title: 'Computer Systems',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI121',
    credits: 3.0,
    term: 'spring2',
    title: 'Software Development',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI189',
    credits: 1.0,
    term: 'spring2',
    title: 'Programming Practicum',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'sc',
    code: 'ECON051',
    credits: 3.0,
    term: 'spring2',
    title: 'Macroeconomics',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'po',
    code: 'PSYC051',
    credits: 3.0,
    term: 'spring2',
    title: 'Psychology',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI140',
    credits: 3.0,
    term: 'fall3',
    title: 'Algorithms',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI195',
    credits: 1.0,
    term: 'fall3',
    title: 'Colloquium',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI134',
    credits: 3.0,
    term: 'fall3',
    title: 'Operating Systems',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI151',
    credits: 3.0,
    term: 'fall3',
    title: 'Artificial Intelligence',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'sc',
    code: 'MUS081',
    credits: 3.0,
    term: 'fall3',
    title: 'Intro to Music',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
]

export const demoShadeCourses: CourseType[] = [
  {
    campus: 'hmc',
    code: 'PHYS024',
    credits: 3.0,
    term: 'fall3',
    title: 'Active',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'PHYS024',
    credits: 3.0,
    term: 'fall3',
    title: 'Inactive',
    type: 'major_req',
    writ_inten: false,
    active: false,
  },
]

export const demoColorCourses: CourseType[] = [
  {
    campus: 'hmc',
    code: 'CSCI140',
    credits: 3.0,
    term: 'fall3',
    title: 'Major Requirement',
    type: 'major_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI151',
    credits: 3.0,
    term: 'fall3',
    title: 'Major Elective',
    type: 'major_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'sc',
    code: 'ECON051',
    credits: 3.0,
    term: 'fall1',
    title: 'Humanities Depth',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'sc',
    code: 'MUS081',
    credits: 3.0,
    term: 'fall1',
    title: 'Humanities Breadth',
    type: 'hum_breadth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'po',
    code: 'PSYC051',
    credits: 3.0,
    term: 'fall1',
    title: 'Humanities Elective',
    type: 'hum_elec',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'CSCI005',
    credits: 3.0,
    term: 'fall1',
    title: 'Core Requirement',
    type: 'core_req',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'cmc',
    code: 'PE056',
    credits: 1.0,
    term: 'fall1',
    title: 'Physical Education/Other',
    type: 'pe',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'cmc',
    code: 'XYZ123',
    credits: 3.0,
    term: 'fall1',
    title: 'Undecided',
    type: 'undecided',
    writ_inten: false,
    active: true,
  },
]

export const demoInitialsCourses: CourseType[] = [
  {
    campus: 'hmc',
    code: 'ECON104',
    credits: 3.0,
    term: 'fall1',
    title: 'Mudd Humanities',
    type: 'hum_depth',
    writ_inten: false,
    active: true,
  },
  {
    campus: 'po',
    code: 'EA010',
    credits: 3.0,
    term: 'fall1',
    title: 'Writing Intensive',
    type: 'hum_breadth',
    writ_inten: true,
    active: true,
  },
  {
    campus: 'hmc',
    code: 'LIT035',
    credits: 3.0,
    term: 'fall1',
    title: 'Mudd Hum/Writ Intens',
    type: 'hum_elec',
    writ_inten: true,
    active: true,
  },
]
