import { Metadata } from "next";
import { NextPage } from "next";
import fs from "fs";

export const metadata: Metadata = {
  title: "Blogs",
};

const postsDirectory = `${process.cwd()}/content`;
const posts = fs.readdirSync(postsDirectory);

const page: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Blogs</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post}>
              <a href={`/posts/${post}`}>{post}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
