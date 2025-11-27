import moment from "moment";
import Link from "next/link";
import { getPosts } from "~/libs/post-utils";

export default function Page() {
  const posts = getPosts();
  return (
    <main>
      <h1 className="text-2xl">Posts</h1>
      <div className="mt-4 space-y-6">
        {posts
          .sort(
            (a, b) =>
              new Date(b.metadata.date).getTime() -
              new Date(a.metadata.date).getTime()
          )
          .map((post) => (
            <div key={post.slug}>
              <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
                <h2>{post.metadata.title}</h2>
              </Link>
              <span className="text-xs text-[#666666]">
                {moment(post.metadata.date).format("MMMM D, YYYY")}
              </span>
            </div>
          ))}
      </div>
    </main>
  );
}
