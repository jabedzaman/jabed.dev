import ProjectItem from "@/components/Project";
import Readme from "@/components/Readme";
import SectionHeader from "@/components/SectionHeader";
import Sidebar from "@/components/Sidebar";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { POSTS_PATH, postFilePaths } from "../lib/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ data, blogs }: any) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-3">
        <Readme
          followers={data?.total_followers || 0}
          wakaTime={
            data?.wakatime.data.grand_total
              .human_readable_total_including_other_language || 0
          }
          stars={data?.total_stars || 0}
          publicRepos={data?.public_repos || 0}
        />
        <SectionHeader header={"Featured Projects"} />
        <section className="flex flex-wrap mb-10 mt-1">
          {data?.repos
            .sort((a: any, b: any) => b.stars - a.stars)
            // avoid repo name with jabedzaman or if it is a fork
            .filter(
              (repo: any) => !repo.name.includes("jabedzaman") && !repo.isfork
            )
            .map((project: any, key: number) => (
              <ProjectItem
                key={key}
                url={project.url}
                name={project.name}
                description={project.description}
                language={project.language}
                forks={project.forks}
                id={project.id}
                stargazers_count={project.stars}
              />
            ))}
        </section>
        <SectionHeader header={"Latest Blog Post"} />
        <section>
          {blogs?.slice(0, 2).map((blog: any, key: number) => (
            <div
              key={key}
              className="my-2 border border-gray-200 dark:border-gray-700  py-3 px-4 hover:shadow-lg dark:hover:shadow-gray-900 duration-150 ease-in-out"
            >
              <Link href={`/posts/${blog?.filePath.replace(/\.mdx?$/, "")}`}>
                <h2 className="text-xl font-bold">{blog.data?.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {blog.data?.description}
                </p>
              </Link>
            </div>
          ))}
          <Link href="/posts">read more ...</Link>
        </section>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.jabed.me/api/v1/metrices");
  const data = await res.json();
  const blogs = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
      filePath,
    };
  });
  return {
    props: {
      data,
      blogs,
    },
  };
};
