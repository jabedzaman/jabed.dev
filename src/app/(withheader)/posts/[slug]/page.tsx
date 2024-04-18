import { bricolage, sora } from "~/libs";
import moment from "moment";
import { getMdxContent, postMetaData, postPaths } from "~/libs/utils";
import { Content } from "~/components/posts";

export async function getStaticPaths() {
  return {
    paths: postPaths.map((slug) => ({
      params: {
        slug: slug.replace(/\.mdx?$/, ""),
      },
    })),
    fallback: false,
  };
}

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
  const { content, frontmatter } = await getMdxContent(params.slug);
  return (
    <main className="my-10">
      <h1 className={`${bricolage.className} text-4xl`}>{frontmatter.title}</h1>
      <p className="text-xs text-[#cecece] my-4">
        {moment(frontmatter.date).format("MMMM D, YYYY")} (
        {moment(frontmatter.date).fromNow()})
      </p>
      <Content content={content} />
    </main>
  );
}
