import Link from "next/link";
import { SiReadthedocs } from "react-icons/si";
export default function Blogs({ blogs }) {
  return (
    <section className="relative lg:px-0 p-5 py-16 dark:bg-transparent max-w-5xl mx-auto">
      <div className="container  mx-auto ">
        <h3 className="lg:text-3xl text-gray-800 dark:text-gray-300 text-center lg:text-left text-2xl font-bold tracking-tight">
          Checkout my Blog posts
        </h3>

        {blogs.map((blog, key) => {
          return (
            <div key={key} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">{blog.data.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="lg:text-2xl text-lg font-medium dark:text-gray-200 text-gray-900 title-font mb-2">
                  {blog.data.title}
                </h2>

                <p className="lg:text-lg text-sm right-0 lg:text-left text-center text-gray-700 font-light mb-2 flex flex-row space-x-3 items-center">
                    <SiReadthedocs className="mr-2"/>
                    {blog.data.read} mins read
                </p>
                <p className="leading-relaxed lg:text-xl text-lg text-gray-700 dark:text-gray-300">{blog.data.description}</p>
                <Link
                  passHref
                  href={`blogs/${blog.filePath.replace(/\.mdx?$/, "")}`}
                >
                  <p className="text-indigo-500 lg:text-lg text-sm cursor-pointer inline-flex items-center mt-4">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                  >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
