import { getPostMdx, postMetaData } from '~/libs/post-utils'
import moment from 'moment'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Content } from './content'

export const generateStaticParams = async () => {
  return postMetaData.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const post = postMetaData.find((post) => post.slug === slug)
  if (!post) {
    return notFound()
  }
  return {
    title: post.title,
    description: post.summary,
    keywords: post.keywords,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = postMetaData.find((post) => post.slug === slug)
  if (!post) {
    return notFound()
  }
  const { content, frontmatter } = await getPostMdx(slug)
  const tags = frontmatter.keywords.split(',')
  return (
    <main className="my-10">
      <h1 className="text-3xl">{frontmatter.title}</h1>
      <span className="text-xs text-[#666666]">
        {moment(frontmatter.date).format('MMMM D, YYYY')} (
        {moment(frontmatter.date).fromNow()})
      </span>
      <div className="my-2 flex flex-row flex-wrap gap-1">
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
