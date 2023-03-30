import React from "react";
import { POSTS_PATH, postFilePaths } from "../lib/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

function Blogs({ blogs }: { blogs: blog[]}) {
  return (
    <section>
      {blogs.map((blog: any) => (
        <div key={blog.filePath}>
          <h1>{blog.data.title}</h1>
          <p>{blog.data.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Blogs;


