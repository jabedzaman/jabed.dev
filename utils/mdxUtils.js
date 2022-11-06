import fs from 'fs'
import path from 'path'

export const BLOGS_PATH = path.join(process.cwd(), 'content/blogs')
export const PROJECTS_PATH = path.join(process.cwd(), 'content/projects')

export const blogFilePaths = fs
  .readdirSync(BLOGS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
export const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))