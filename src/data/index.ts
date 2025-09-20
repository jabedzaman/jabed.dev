import { IProject, ISocialLink, IWorkExperience } from '~/types'

export const PROJECTS: IProject[] = []

export const WORK_EXPERIENCE: IWorkExperience[] = [
  {
    company: 'SkillRev',
    title: 'full stack developer',
    start: 'Aug 2025',
    end: 'Present',
    link: 'https://skillrev.dev',
    id: 'work-3',
  },
  {
    company: 'DLA Technologies',
    title: 'full stack developer',
    start: 'Dec 2024',
    end: 'Aug 2025',
    link: 'https://www.dlatechnologies.com',
    id: 'work-2',
  },
  {
    company: 'Dipeat Foods Pvt. Ltd.',
    title: 'SDE intern',
    start: 'Jan 2024',
    end: 'Dec 2024',
    link: 'https://dipeat.com',
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
