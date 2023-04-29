import { allPosts } from "contentlayer/generated";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { Mdx } from "@/components/mdx";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post.title };
};

const ReadingTime = ({ content }: { content: string }) => {
  const wordsPerMinute = 200;
  const words = content.split(/\s/g).length;
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return (
    <span className="flex flex-row space-x-1 items-center text-sm mt-1">
      <AiOutlineClockCircle />
      <p className="font-thin">{readTime} min read</p>
    </span>
  );
};

const PublishedDate = ({ date }: { date: string }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <span className="flex flex-row space-x-1 items-center text-sm mt-1">
      <AiOutlineCalendar />
      <time dateTime={date}>{formattedDate}</time>
    </span>
  );
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="mb-4 border-b-1 border-b-gray-500">
        <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
        <ReadingTime content={post.body.raw} />
        <PublishedDate date={post.date} />
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
