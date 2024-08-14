import * as fs from "fs";
import * as path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import type { Pluggable } from "unified";
import matter from "gray-matter";
import { Article } from "~/shared/types/article";

export const postsDir = path.join(process.cwd(), "content/posts");

export const postPaths = fs
  .readdirSync(postsDir)
  .filter((path) => /\.mdx?$/.test(path));

export const postMetaData: Article[] = postPaths.map((postPath) => {
  const source = fs.readFileSync(path.join(postsDir, postPath), "utf8");
  const { data } = matter(source);
  return {
    title: data.title,
    date: data.date,
    summary: data.summary,
    keywords: data.keywords.split(","),
    slug: postPath.replace(/\.mdx?$/, ""),
  };
});

const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "vitesse-dark",
  onVisitLine(node: { children: string | any[] }) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

export async function getMdxContent(slug: string) {
  const source = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8");
  const mdx = await compileMDX<{ title: string; date: string; summary: string; keywords: string }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions],
        ] as unknown as //@ts-ignore
        Pluggable<any[]>[],
      },
    },
  });
  return mdx;
}