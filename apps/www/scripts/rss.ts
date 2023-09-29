import fs from 'fs'
import RSS from 'rss'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

const posts = fs
  .readdirSync(path.resolve(__dirname, '../posts/'))
  .filter(
    (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
  )
  .map((file) => {
    const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
    const { data, content }: { data: any; content: string } =
      matter(postContent)
    return { ...data, body: content }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const renderer = new marked.Renderer()

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
})

const renderPost = (md: string) => marked.parse(md)

const main = () => {
  const feed = new RSS({
    title: 'Jabed\'s Blog',
    site_url: 'https://www.jabed.dev',
    feed_url: 'https://www.jabed.dev/feed.xml',
    image_url: 'https://avatars.githubusercontent.com/u/99767817?v=4',
    language: 'en',
    description: "Jabed's blog",
  })

  posts.forEach((post) => {
    const url = `https://www.jabed.dev/post/${post.slug}`

    feed.item({
      title: post.title,
      description: renderPost(post.body),
      date: new Date(post?.date),
      author: 'Max Leiter',
      url,
      guid: url,
    })
  })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss)
}

main()
