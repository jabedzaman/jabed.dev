import { bricolage, sora } from "~/shared/fonts";
import moment from "moment";
import { getMdxContent, postMetaData, postPaths } from "~/shared/utils";
import { Content } from "~/components/posts";
import { notFound } from "next/navigation";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = postMetaData.find((post) => post.slug === params.slug);
  return {
    title: post?.title,
    description: post?.summary,
    keywords: post?.keywords,
    openGraph: {
      title: post?.title,
      description: post?.summary,
      type: "article",
      url: `https://jabed.dev/post/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.summary,
    },
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
      <h1 className={`${bricolage.className} text-4xl`}>{frontmatter.title}</h1>
      <p className="text-xs text-[#cecece] my-4">
        {moment(frontmatter.date).format("MMMM D, YYYY")} (
        {moment(frontmatter.date).fromNow()})
      </p>
      <div className="flex flex-row flex-wrap gap-2 my-2">
        {tags.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-[#1a1a1a] text-[#666666] px-2 py-1 rounded-md hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
          >
            # {tech}
          </span>
        ))}
      </div>
      <Content content={content} />
    </main>
  );
}
