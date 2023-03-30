import fs from "fs";
import path from "path";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import { POSTS_PATH, postFilePaths } from "../../lib/mdxUtils";
import "highlight.js/styles/atom-one-dark.css";

export default function Blog({ source }: any) {
  return (
    <article className="max-w-5xl li prose-a:no-underline prose-a:font-bold   prose-a:text-[#00B6FE]  font-poppins mx-auto p-5 prose  dark:prose-pre:border-[#0D1117] lg:prose-xl dark:prose-invert prose-pre:border prose-pre:p-0 lg:prose-pre:p-0 prose-pre:bg-[#FFFFFF] dark:prose-pre:bg-[#0D1117]">
      <Head>
        <title>{source.frontmatter.title}</title>
        <meta name="description" content={source.frontmatter.description} />
        <meta name="og:title" content={source.frontmatter.title} />
        <meta name="og:description" content={source.frontmatter.description} />
        <meta name="og:image" content={source.frontmatter.image} />
        <meta name="keywords" content={source.frontmatter.tags} />
      </Head>
      <header>
        <h1 className="text-4xl font-bold">{source.frontmatter.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {source.frontmatter.date}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {source.frontmatter.description}
        </p>
        <img src={source.frontmatter.image} alt={source.frontmatter.title} />
      </header>
      <MDXRemote {...source} />
    </article>
  );
}

export async function getStaticPaths() {
  const paths = postFilePaths
    .map((path: any) => path.replace(/\.mdx?$/, ""))
    .map((slug: any) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  // const stats = readingTime(source);
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return { props: { source: mdxSource } };
}
