import { IProject, ISocialLink, IWorkExperience } from '~/types'

export const PROJECTS: IProject[] = []

export const WORK_EXPERIENCE: IWorkExperience[] = [
  {
    company: 'SkillRev',
    title: 'full stack developer',
    start: 'Aug 2025',
    end: 'Present',
    link: 'https://skillrev.com',
    id: 'work-4',
  },
  {
    company: 'DLA Technologies',
    title: 'full stack developer',
    start: 'Dec 2024',
    end: 'Present',
    link: 'https://www.dlatechnologies.com',
    id: 'work-3',
  },
  {
    company: 'Dipeat Foods Pvt. Ltd.',
    title: 'full stack developer',
    start: 'Jan 2024',
    end: 'Dec 2024',
    link: 'https://dipeat.com',
    id: 'work-2',
  },
  {
    company: 'Gupshupp',
    title: 'full stack developer',
    start: 'Dec 2023',
    end: 'Jan 2024',
    link: 'https://omegleapp.me',
    id: 'work-1',
  },
]

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jabedzaman',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jabedzaman/',
  },
]

export const EMAIL = 'hi@jabed.dev'

export const WEBSITE_URL = 'https://jabed.dev'
