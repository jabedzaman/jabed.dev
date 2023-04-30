import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { NextPage } from "next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering and related topics.",
};

function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="text-blue-700 hover:text-blue-900"
      legacyBehavior
    >
      <div className="mt-3">
        <h2 className="text-lg">{post.title}</h2>
        <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
    </Link>
  );
}

const page: NextPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date))
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold">Blogs</h1>
      {posts.map((post) => (
        <PostCard key={post._raw.flattenedPath} {...post} />
      ))}
    </div>
  );
};

export default page;
