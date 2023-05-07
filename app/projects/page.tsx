// import { URL } from "@/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import { Octokit } from "@octokit/rest";
import ProjectItem from "./Item";

const getdata = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const { data: repos } = await octokit.repos.listForUser({
    username: "jabedzaman",
  });
  const { data: followers } = await octokit.users.listFollowersForUser({
    username: "jabedzaman",
  });
  const repoarr = repos.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      isfork: repo.fork,
      language: repo.language,
      created_at: repo.created_at,
      topics: repo.topics,
    };
  });
  let totalstars = 0 as number;
  repoarr.forEach((repo) => {
    totalstars += repo.stars as number;
  });
  return {
    username: "jabedzaman",
    total_stars: totalstars,
    total_followers: followers.length,
    public_repos: repos.length,
    repos: repoarr,
  };
};

export const metadata: Metadata = {
  title: "Projects",
};

const page = async () => {
  const data = await getdata();
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
