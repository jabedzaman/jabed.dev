import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Octokit } from "@octokit/rest";
import { LuGitFork, LuStar } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import { bricolage } from "~/libs";
import { githubConfig } from "~/config";
import projectData from "~/data/projects.json";

const octokit = new Octokit({
  auth: githubConfig.GITHUB_ACCESS_TOKEN,
});

type ProjectProps = {
  displayName: string;
  description: string;
  image: string;
  deployedLink?: string;
  repo: {
    owner: string;
    name: string;
    isPrivate: boolean;
  };
};

const Project: React.FC<ProjectProps> = React.memo(
  async ({ displayName, description, image, deployedLink, repo }) => {
    const stats = await octokit.repos.get({
      owner: repo.owner,
      repo: repo.name,
    });
    return (
      <div className="relative overflow-hidden">
        <Image
          width={300}
          height={300}
          src={image}
          className="w-full h-[300px] object-cover transition-transform duration-300 transform"
          alt={displayName}
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:none md:hover:opacity-80 transition-opacity duration-300 p-10 flex flex-col justify-between">
          <div>
            <h2 className={`${bricolage.className} font-semibold text-2xl`}>
              {displayName}
            </h2>
            <p>{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              {!!deployedLink && (
                <Link
                  href={deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <IoIosLink />
                  {deployedLink.split("/")[2]}
                </Link>
              )}
              {!repo.isPrivate && (
                <Link
                  href={`https://github.com/${repo.owner}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <FaGithub />
                </Link>
              )}
            </div>
            {!repo.isPrivate ? (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 ">
                  <LuStar />
                  {stats.data.stargazers_count}
                </span>
                <span className="flex items-center gap-1 ">
                  <LuGitFork />
                  {stats.data.forks_count}
                </span>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
);
Project.displayName = "Project Card";

export const Projects: React.FC = React.memo(() => {
  return (
    <section>
      <h1
        className={
          bricolage.className +
          " text-2xl md:text-4xl leading-snug md:leading-tight"
        }
      >
        Projects
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-4">
        {projectData.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
