import { BLOGS_PATH, blogFilePaths } from "../../utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Blogs({ blogs }) {
  return (
    <Layout>
      <section>
        <div className="max-w-5xl mx-auto p-5 min-h-screen">
          <h1 className="font-poppins lg:text-4xl text-2xl font-semibold lg:font-bold">
            Blogs
          </h1>
          <p className="font-poppins mt-3 dark:text-slate-400">
            At my leisure time I use to write articles. Feel free to check them
            out.
          </p>
          {blogs.map((blog, key) => {
            return (
              <Link
                passHref
                key={key}
                href={`blogs/${blog.filePath.replace(/\.mdx?$/, "")}`}
              >
                <div className="w-full border-b pb-2 dark:border-zinc-700 cursor-pointer my-5">
                  <h3 className="text-lg font-poppins font-bold  sm:text-xl md:text-2xl">
                    {blog.data.title}
                  </h3>
                  <p className="mt-1  font-poppins text-base text-gray-600 dark:text-zinc-400 sm:text-lg md:text-normal">
                    {blog.data.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
export function getStaticProps() {
  const blogs = blogFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BLOGS_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
      filePath,
    };
  });
  return { props: { blogs } };
}
