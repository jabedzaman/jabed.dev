// import { URL } from "@/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import ProjectItem from "./Item";

export const metadata: Metadata = {
  title: "Projects",
};

const page = async () => {
  const data = await fetch("http://127.0.0.1:3000/api/v1/metrics", {
    next: {
      revalidate: 60,
      tags: ["projects"],
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-1 ease-in-out">
          {data?.repos
            .sort((a: any, b: any) => b.stars + b.forks - (a.stars + a.forks))
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
      </Suspense>
    </div>
  );
};

export default page;
