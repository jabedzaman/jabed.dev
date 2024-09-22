import { postMetaData } from "@/libs/utils";
import moment from "moment";
import { Link } from "next-view-transitions";

export default function Page() {
  return (
    <div className="my-4 flex flex-col gap-2">
      {postMetaData
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
            <h2>{post.title}</h2>
            <span className="text-xs text-[#666666]">
              {moment(post.date).format("MMMM D, YYYY")}
            </span>
          </Link>
        ))}
    </div>
  );
}
