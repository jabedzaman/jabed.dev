import React from "react";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section className="mx-auto max-w-5xl lg:px-0 px-5 mb-5">
      <h1 className="lg:text-5xl md:text-2xl text-lg font-bold ">
        Featured Projects
      </h1>
      <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
        Some of my featured side projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {projects.map((project) => (
          <div key={project.id} className="p-1">
            <a href={project.link} target="_blank" rel="noreferrer">
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
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
