import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";
import Layout from "./Layout";

function Projects({ projects }) {
  return (
    <Layout>
      <section className="mb-10 mt-24 Projects max-w-5xl lg:px-0 px-4 py-6 mx-auto">
        <div className="container mx-auto">
          <h2 className="lg:text-3xl text-gray-800 dark:text-gray-300 text-center lg:text-left text-2xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="mt-2 text-lg lg:px-0 px-2 text-gray-600 dark:text-gray-400">
            Some of my featured projects
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-8 sm:px-8 xl:px-0">
            {projects.map((project, key) => {
              return (
                <Link
                  key={key}
                  passHref
                  href={`projects/${project.filePath.replace(/\.mdx?$/, "")}`}
                >
                  <div className="relative cursor-pointer lg:hover:scale-105 transition  p-3 flex flex-col justify-between col-span-4 space-y-3 overflow-hidden">
                    <LazyLoadImage
                      effect="blur"
                      className="m-0"
                      src={project.data.cover}
                    />

                    <h4 className="text-xl lg:text-left text-center font-bold text-gray-800 dark:text-gray-200 ">
                      {project.data.title}
                    </h4>
                    <p className="text-base lg:text-left text-center text-gray-600 dark:text-zinc-400 ">
                      {project.data.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Projects;
