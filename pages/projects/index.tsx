import ProjectItem from "@/components/Project";
import React from "react";

function index({ data }: any) {
    if (!data) {
        return <div>Loading...</div>;
    }
  return (
    <div>
      <h1 className="md:text-4xl  text-2xl font-semibold">My Projects</h1>
      <section className="flex flex-wrap mt-4 mb-1">
        {data?.repos
          .sort((a: any, b: any) => b.stars - a.stars)
          .filter(
            (repo: any) => !repo.name.includes("jabedzaman") && !repo.isfork
          )
          .map((project: any, key: number) => (
            <ProjectItem
              key={key}
              url={project.url}
              name={project.name}
              description={project.description}
              language={project.language}
              forks={project.forks}
              id={project.id}
              stargazers_count={project.stars}
            />
          ))}
      </section>
      <h1 className="md:text-4xl  text-2xl font-semibold mt-8 mb-1">
        Contributed Projects
      </h1>
      <section className="flex flex-wrap mb-1">
        {data?.repos
          .sort((a: any, b: any) => b.stars - a.stars)
          .filter((repo: any) => repo.isfork)
          .map((project: any, key: number) => (
            <ProjectItem
              key={key}
              url={project.url}
              name={project.name}
              description={project.description}
              language={project.language}
              forks={project.forks}
              id={project.id}
              stargazers_count={project.stars}
            />
          ))}
      </section>
    </div>
  );
}

export default index;

export const getServerSideProps = async () => {
  const res = await fetch("https://api.jabed.me/api/v1/metrices");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
