import { URL } from "@/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import ProjectItem from "./Item";

export const metadata: Metadata = {
  title: "Projects",
};

const page = async () => {
  const data = await fetch(URL + "/api/v1/metrics", {
    next: {
      revalidate: 1,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return (
    <div>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="flex flex-wrap mb-1">
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
