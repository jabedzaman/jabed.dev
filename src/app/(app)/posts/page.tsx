import { postMetaData } from "~/libs/post-utils";
import moment from "moment";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Posts</h1>
      <div className="my-4 flex flex-col gap-2">
        {postMetaData
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
              <h2>{post.title}</h2>
              <span className="text-xs text-[#666666]">
                {moment(post.date).format("MMMM D, YYYY")}
              </span>
            </Link>
          ))}
      </div>
    </>
  );
}
