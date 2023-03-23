import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  const projects = require("../../data/projects.json");

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p className="text-2xl font-bold text-center">Project not found.</p>;
  }

  return (
<section className="mx-auto my-3 max-w-5xl px-5">
      <h1 className="text-5xl font-bold ">{project.title}</h1>
      <p className="text-gray-500">
        {project.description} <br />
      </p>
      <img
        src={project.image}
        alt={project.title}
        className="shadow-lg my-5 border-2 border-gray-200 p-1"
      />
      <p>
        <a href={project.link}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project
            </button>
        </a>
      </p>
    </section>
  );
};

export default Project;
