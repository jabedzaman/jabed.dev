import moment from 'moment'
import Link from 'next/link'
import { AnimatedContainer } from '~/components/ui/animated-container'
import { postMetaData } from '~/libs/post-utils'

export default function Page() {
  return (
    <AnimatedContainer
      sections={[
        <h1 className="text-2xl">Posts</h1>,
        ...postMetaData
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((post) => (
            <div key={post.slug} className="-mb-4">
              <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
                <h2>{post.title}</h2>
              </Link>
              <span className="text-xs text-[#666666]">
                {moment(post.date).format('MMMM D, YYYY')}
              </span>
            </div>
          )),
      ]}
    />
  )
}
