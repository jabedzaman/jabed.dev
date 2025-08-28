'use server'

import { postMetaData } from '~/libs/post-utils'
import { IBlogPost } from '~/types'

export const getBlogPosts = async (): Promise<IBlogPost[]> => {
  const posts = postMetaData
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      link: `/posts/${post.slug}`,
      uid: post.slug,
      description: post.summary,
    }))
  return posts
}
