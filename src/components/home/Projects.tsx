import * as React from "react";
import Link from "next/link";
import { Octokit } from "@octokit/rest";
import { LuGitFork, LuStar } from "react-icons/lu";
import { IoIosArrowRoundUp } from "react-icons/io";

import { bricolage, sora } from "~/libs";
import { projects as ProjectData, ProjectProps } from "~/data/projects";
import { githubConfig } from "~/config";

const octokit = new Octokit({
  auth: githubConfig.GITHUB_ACCESS_TOKEN,
});

const Project: React.FC<ProjectProps> = React.memo(
  async ({ displayName, description, preview, repo, techStack }) => {
    const stats = await octokit.repos.get({
      owner: repo.owner,
      repo: repo.name,
    });
    return (
      <div>
        <div className="flex flex-row justify-between items-center my-4">
          <div className="max-w-2xl flex flex-row items-center gap-2">
            {preview ? (
              <Link href={preview}>
                <h2 className={`${sora.className} link`}>{displayName}</h2>
              </Link>
            ) : (
              <h2 className={`${sora.className}`}>{displayName}</h2>
            )}
            {!repo.isPrivate && (
              <div className="flex items-center gap-2">
                <Link
                  href={`https://github.com/${repo.owner}/${repo.name}`}
                  className="flex items-center gap-1 text-[#666666] text-xs hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
                >
                  <LuStar />
                  {stats.data.stargazers_count}
                </Link>
                <Link
                  href={`
                  https://github.com/${repo.owner}/${repo.name}/network/members.${repo.name}
                `}
                  className="flex items-center gap-1 text-[#666666] text-xs hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
                >
                  <LuGitFork />
                  {stats.data.forks_count}
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center gap-2">
            {!repo.isPrivate && (
              <Link
                href={`https://github.com/${repo.owner}/${repo.name}`}
                className="text-sm text-[#666666] hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
              >
                <span>Repo</span>
                <IoIosArrowRoundUp
                  className="inline-block transform rotate-45 -mt-1 text-xs"
                  size={20}
                  color="#666666"
                />
              </Link>
            )}
            {preview && (
              <Link
                href={preview}
                className="text-sm text-[#666666] hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
              >
                <span>Live</span>
                <IoIosArrowRoundUp
                  className="inline-block transform rotate-45 -mt-1 text-xs"
                  size={20}
                  color="#666666"
                />
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 my-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#1a1a1a] text-[#666666] px-2 py-1 rounded-md hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
            >
              # {tech}
            </span>
          ))}
        </div>
        <span className="text-sm text-[#666666]">{description}</span>
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
      <div className="flex flex-col gap-6 my-4">
        {ProjectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
