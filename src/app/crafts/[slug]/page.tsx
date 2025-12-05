import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDX } from "./mdx";
import { getCraftBySlug, getCrafts } from "~/lib/crafts";

export const generateStaticParams = async () => {
  return getCrafts().map((craft) => ({ slug: craft.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const craft = getCraftBySlug(slug);
  if (!craft) {
    return notFound();
  }
  return {
    title: craft.metadata.title,
    description: craft.metadata.summary,
    keywords: craft.metadata.keywords,
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const craft = getCraftBySlug(slug);
  if (!craft) {
    return notFound();
  }
  return (
    <main>
      <div className="border-b">
        <div className="mb-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif">
              {craft.metadata.title}.
            </h1>
            <p className="max-w-2xl">{craft.metadata.summary}</p>
          </div>
        </div>
      </div>
      <article className="mt-10 prose-img:w-full prose-img:rounded-lg prose-lg prose-a:underline prose-a:underline-offset-2 prose-a:decoration-1 prose-blockquote:border-l-2 prose-blockquote:border-l-[#3d3d3d] prose-hr:border-[#3d3d3d] prose-hr:border-t prose-hr:border-dashed prose-hr:border-opacity-50 prose-pre:overflow-scroll my-4 text-[16px] md:my-5">
        <MDX source={craft.content} />
      </article>
    </main>
  );
}
