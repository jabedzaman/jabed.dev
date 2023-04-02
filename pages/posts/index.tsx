import React, { Key } from "react";
import { POSTS_PATH, postFilePaths } from "../../lib/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type blog = {
  filePath: string;
  data: {
    index: string;
    title: string;
    description: string;
    date: string;
    image: string;
  };
};

function Index({ blogs }: { blogs: blog[] }) {
  const [search, setSearch] = React.useState<string>("");
  return (
    <React.Fragment>
      <h1
        className="lg:text-5xl md:text-4xl text-3xl font-bold
      text-blue-500 dark:text-blue-400
      "
      >
        Blogs
      </h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 my-5"
      />
      <p className="my-5 text-right text-sm text-gray-500 dark:text-gray-400">
        showing{" "}
        {
          blogs.filter((blog) => {
            if (search === "") {
              return blog;
            } else if (
              blog.data.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return blog;
            }
          }).length
        }{" "}
        of {blogs.length || 0} posts
      </p>
      {blogs
        .sort((a, b) => {
          return Number(b.data.index) - Number(a.data.index);
        })
        .filter((blog) => {
          if (search === "") {
            return blog;
          } else if (
            blog.data.title.toLowerCase().includes(search.toLowerCase())
          ) {
            return blog;
          }
        })
        .map((blog) => {
          return (
            <Link
              href={`/posts/${blog.filePath.replace(/\.mdx?$/, "")}`}
              key={blog.filePath}
            >
              <div className="flex flex-row justify-between  items-center md:mt-8 mt-7">
                <h2 className="md:text-2xl text-xl font-bold cursor-pointer">
                  {blog.data.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-right">
                  {blog.data.date}
                </p>
              </div>
              <p className="md:text-sm tex-xs text-gray-500 dark:text-gray-400">
                {blog.data.description}
              </p>
            </Link>
          );
        })}
    </React.Fragment>
  );
}

export default Index;

export async function getStaticProps() {
  const blogs = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
      filePath,
    };
  });
  return { props: { blogs } };
}
