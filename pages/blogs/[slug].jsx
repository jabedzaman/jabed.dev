import fs from "fs";
import path from "path";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import { BLOGS_PATH, blogFilePaths } from "../../utils/mdxUtils";
import "highlight.js/styles/atom-one-dark.css"; 

export default function Blog({ source }) {
  return (
    <article className="max-w-4xl li prose-a:no-underline prose-a:font-bold   prose-a:text-[#00B6FE]  font-poppins mx-auto p-5 prose  dark:prose-pre:border-[#0D1117] lg:prose-xl dark:prose-invert prose-pre:border prose-pre:p-0 lg:prose-pre:p-0 prose-pre:bg-[#FFFFFF] dark:prose-pre:bg-[#0D1117]">
      <Head>
        <title>{source.frontmatter.title}</title>
        <meta name="description" content={source.frontmatter.description} />
      </Head>

      <MDXRemote {...source} />
    </article>
  );
}

export async function getStaticPaths() {
  const paths = blogFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const blogFilePath = path.join(BLOGS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(blogFilePath);
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return { props: { source: mdxSource } };
}
``;
