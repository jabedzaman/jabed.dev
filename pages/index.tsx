import ProjectItem from "@/components/Project";
import Readme from "@/components/Readme";
import SectionHeader from "@/components/SectionHeader";
import Sidebar from "@/components/Sidebar";
import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import React, { Key } from "react";
import { POSTS_PATH, postFilePaths } from "../lib/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ data , blogs}: any) {
  console.log(blogs);
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-3">
        <Readme
          followers={data.data.followers || 0}
          wakaTime={data.data.wakatime}
          stars={data.data.total_stars || 0}
          publicRepos={data.data.public_repos || 0}
        />
        <SectionHeader header={"Featured Projects"} />
        <section className="flex flex-wrap mb-10 mt-1">
          <ProjectItem
            description="Multiplatform Music dowloader"
            forks={5}
            id={1}
            language="JavaScript"
            stargazers_count={14}
            name="Spotilader"
          />
          <ProjectItem
            description="Anime Streaming Client"
            forks={1}
            id={2}
            language="JavaScript"
            stargazers_count={1}
            name="Bozo"
          />
        </section>
        <SectionHeader header={"Latest Blog Post"} />
        <section>
          <div className="my-2 border border-gray-200 dark:border-gray-700  py-3 hover:shadow-md px-4">
            <Link href="/posts/react-appwrite">
              <h1 className="md:text-2xl text-lg  font-semibold">
                Appwrite as backend service for your react app
              </h1>
              <p className="md:text-sm text-xs text-gray-500">
                Guide to get started with using appwrite as backend service for
                your react app
              </p>
            </Link>
          </div>
          <div className="my-2 border border-gray-200 dark:border-gray-700  py-3 hover:shadow-md px-4">
            <Link href="/posts/spotify-streaming">
              <h1 className="md:text-2xl text-lg  font-semibold">
                Spotify Streaming on your personal website
              </h1>
              <p className="md:text-sm text-xs text-gray-500">
                Fetch your currently spotify streaming song
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.jabed.me/stats");
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
