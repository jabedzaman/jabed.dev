import { getProjectMdx, projectMetaData } from '~/libs/post-utils'
import moment from 'moment'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Content } from './content'
import Link from 'next/link'

export const generateStaticParams = async () => {
  return projectMetaData.map((project) => ({
    slug: project.slug,
  }))
}

export const generateMetadata = ({
  params,
}: {
  params: { slug: string }
}): Metadata => {
  const project = projectMetaData.find(
    (project) => project.slug === params.slug,
  )
  if (!project) {
    return notFound()
  }
  return {
    title: project.title,
    description: project.summary,
    keywords: project.keywords,
  }
}

/**
 *
 * @param url the url to be converted to string
 * @returns the converted string, e.g. "https://example.com" => "example.com"
 */
const convertUrlToString = (url: string) => {
  return url
    .replace(/(^\w+:|^)\/\//, '')
    .replace(/\/$/, '')
    .replace('www.', '')
    .toLowerCase()
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = projectMetaData.find(
    (project) => project.slug === params.slug,
  )
  if (!project) {
    return notFound()
  }
  const { content, frontmatter } = await getProjectMdx(params.slug)
  const tags = frontmatter.keywords.split(',')
  return (
    <main className="my-10">
      <h1 className="text-2xl">{frontmatter.title}</h1>
      <Link
        href={frontmatter.url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-xs text-[#666666] duration-200 ease-in-out hover:text-[#8a8a8a]"
      >
        {convertUrlToString(frontmatter.url)}
      </Link>
      {frontmatter.image && (
        <img
          src={frontmatter.image}
          className="my-4 h-44 w-full rounded-lg object-cover"
          alt={frontmatter.title}
        />
      )}
      <div />
      <span className="text-xs text-[#666666]">
        {moment(frontmatter.date).format('MMMM D, YYYY')} (
        {moment(frontmatter.date).fromNow()})
      </span>
      <div className="my-2 flex flex-row flex-wrap gap-2">
        {tags.map((tech, index) => (
          <span
            key={index}
            className="ext-[#666666] cursor-pointer rounded-md px-1 py-0.5 text-xs duration-200 ease-in-out hover:text-[#8a8a8a] md:px-2 md:py-1"
          >
            # {tech}
          </span>
        ))}
      </div>
      <Content content={content} />
    </main>
  )
}
