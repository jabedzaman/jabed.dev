import React from "react";
import projects from "../../data/projects.json";
import Link from "next/link";

function index() {
  return (
    <section className="mx-auto my-3 max-w-3xl lg:px-0 px-5">
      <h1 className="text-5xl font-bold ">Projects</h1>
      <p className="text-gray-500">Some of my side projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {projects.map((project) => (
          <div key={project.id} className="p-1">
            <Link href={`/projects/${project.slug}`}>
              <img
                src={project.image}
                className="w-full lg:h-52 h-48 max-w-sm  shadow-xl mx-auto object-cover border-2 border-gray-200 p-1 hover:shadow-2xl"
                alt={project.title}
              />
              <h2 className="md:text-xl font-bold my-2 text-lg text-center lg:text-left">
                {project.title}
              </h2>
              <p className="text-gray-500 text-center text-xs md:text-sm lg:text-left">
                {project.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default index;
