import fs from "fs";
import path from "path";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import { PROJECTS_PATH, projectFilePaths } from "../../utils/mdxUtils.js";
import "highlight.js/styles/atom-one-dark.css";
import Layout from "../../components/Layout.jsx";
import Backbtn from "../../components/Backbtn.jsx";

export default function Project({ source }) {
  return (
    <Layout>
      <article className="max-w-4xl font-poppins mx-auto p-5 prose prose-a:no-underline prose-a:text-[#00B6FE]  dark:prose-pre:border-[#0D1117] lg:prose-xl dark:prose-invert prose-pre:border prose-pre:p-0 lg:prose-pre:p-0 prose-pre:bg-[#FFFFFF] dark:prose-pre:bg-[#0D1117]">
        <Head>
          <title>{source.frontmatter.title}</title>
          <meta name="description" content={source.frontmatter.description} />
        </Head>
        <Backbtn/>
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = projectFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const projectFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(projectFilePath);
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return { props: { source: mdxSource } };
}
