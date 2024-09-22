import { getMdxContent, postMetaData } from "@/libs/utils";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Content } from "./content";

export const getStaticParams = async () => {
  return postMetaData.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = postMetaData.find((post) => post.slug === params.slug);
  if (!post) {
    return notFound();
  }
  return {
    title: post.title,
    description: post.summary,
    keywords: post.keywords,
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const post = postMetaData.find((post) => post.slug === params.slug);
  if (!post) {
    return notFound();
  }
  const { content, frontmatter } = await getMdxContent(params.slug);
  const tags = frontmatter.keywords.split(",");
  return (
    <main className="my-10">
      <h1 className="text-4xl">{frontmatter.title}</h1>
      <span className="text-xs text-[#666666]">
        {moment(frontmatter.date).format("MMMM D, YYYY")} (
        {moment(frontmatter.date).fromNow()})
      </span>
      <div className="flex flex-row flex-wrap gap-2 my-2">
        {tags.map((tech, index) => (
          <span
            key={index}
            className="text-xs ext-[#666666] px-2 py-1 rounded-md hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
          >
            # {tech}
          </span>
        ))}
      </div>
      <Content content={content} />
    </main>
  );
}
