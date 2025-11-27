import { getWritingBySlug, getWritings } from "~/libs/utils";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDX } from "./mdx";

export const generateStaticParams = async () => {
  return getWritings().map((writing) => ({ slug: writing.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);
  if (!writing) {
    return notFound();
  }
  return {
    title: writing.metadata.title,
    description: writing.metadata.summary,
    keywords: writing.metadata.keywords,
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);
  if (!writing) {
    return notFound();
  }
  const tags = writing.metadata.keywords.split(",").map((tag) => tag.trim());
  return (
    <main>
      <h1 className="text-3xl">{writing.metadata.title}</h1>
      <span className="text-xs text-[#666666]">
        {moment(writing.metadata.date).format("MMMM D, YYYY")} (
        {moment(writing.metadata.date).fromNow()})
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
      <article className='"prose-img:w-full prose-img:rounded-lg prose-lg prose-a:underline prose-a:underline-offset-1 prose-blockquote:border-l-2 prose-blockquote:border-l-[#3d3d3d] prose-hr:border-[#3d3d3d] prose-hr:border-t prose-hr:border-dashed prose-hr:border-opacity-50 prose-pre:overflow-scroll my-2 text-[16px] md:my-5'>
        <MDX source={writing.content} />
      </article>
    </main>
  );
}
