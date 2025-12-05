import { getWritingBySlug, getWritings } from "~/lib/writings";
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
  return (
    <main>
      <div className="border-b">
        <div className="mb-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif">
              {writing.metadata.title}.
            </h1>
            <p className="max-w-2xl">{writing.metadata.summary}</p>
          </div>
          <span className="text-xs text-[#666666]">
            {moment(writing.metadata.date).format("MMMM D, YYYY")} (
            {moment(writing.metadata.date).fromNow()})
          </span>
        </div>
      </div>
      <article className="mt-10 prose-img:w-full prose-img:rounded-lg prose-lg prose-blockquote:border-l-2 prose-blockquote:border-l-[#3d3d3d] prose-hr:border-[#3d3d3d] prose-hr:border-t prose-hr:border-dashed prose-hr:border-opacity-50 prose-pre:overflow-scroll my-4 text-[16px] md:my-5">
        <MDX source={writing.content} />
      </article>
    </main>
  );
}
