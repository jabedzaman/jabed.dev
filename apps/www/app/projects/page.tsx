import { Metadata } from "next";
import { Suspense } from "react";
import ProjectItem from "./Item";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Jabed Zaman",
};

const page = async () => {
  const data = await fetch("https://api.jabed.dev/api/v1/github/repos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-1 ease-in-out">
          {data?.repos
            .sort((a: any, b: any) => b.stars + b.forks - (a.stars + a.forks))
            .filter((repo: any) => !repo.name.includes("jabedzaman"))
            .map((repo: any, key: number) => (
              <ProjectItem
                key={key}
                url={repo.url}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                forks={repo.forks_count}
                id={repo.id}
                stargazers_count={repo.stargazers_count}
              />
            ))}
        </section>
      </Suspense>
    </div>
  );
};

export default page;
