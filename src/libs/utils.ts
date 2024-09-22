import { Article, Project } from "@/types";
import * as fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import * as path from "path";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import type { Pluggable } from "unified";

export const postsDir = path.join(process.cwd(), "content/posts");
export const projectsDir = path.join(process.cwd(), "content/projects");

export const postPaths = fs
  .readdirSync(postsDir)
  .filter((path) => /\.mdx?$/.test(path));
export const projectPaths = fs
  .readdirSync(projectsDir)
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

export const projectMetaData: Project[] = projectPaths.map((projectPath) => {
  const source = fs.readFileSync(path.join(projectsDir, projectPath), "utf8");
  const { data } = matter(source);
  return {
    title: data.title,
    date: data.date,
    summary: data.summary,
    keywords: data.keywords.split(","),
    slug: projectPath.replace(/\.mdx?$/, ""),
    image: data?.image,
    url: data.url,
  };
});

const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "catppuccin-latte",
  grid: true,
  filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
  onVisitLine(node: { children: string | any[] }) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

export async function getPostMdx(slug: string) {
  const source = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8");
  const mdx = await compileMDX<{
    title: string;
    date: string;
    summary: string;
    keywords: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions],
          //@ts-ignore
        ] as unknown as Pluggable<any[]>[],
      },
    },
  });
  return mdx;
}

export async function getProjectMdx(slug: string) {
  const source = fs.readFileSync(path.join(projectsDir, `${slug}.mdx`), "utf8");
  const mdx = await compileMDX<{
    title: string;
    date: string;
    summary: string;
    keywords: string;
    image: string;
    url: string;
    github: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions],
          //@ts-ignore
        ] as unknown as Pluggable<any[]>[],
      },
    },
  });
  return mdx;
}
