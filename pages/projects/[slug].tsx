import { useEffect, useState } from "react";
import { AiOutlineBook, AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { useRouter } from "next/router";

type Project = {
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
};

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="md:text-4xl text-3xl font-bold capitalize">{slug}</h1>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <p
            className="dark:hover:text-gray-200 dark:text-gray-400 text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={() => {
              window.open(project && project.html_url ? project.html_url : "");
            }}
          >
            <AiOutlineStar className="inline-block" />{" "}
            {project && project.stargazers_count
              ? project.stargazers_count
              : "0"}{" "}
            stars
          </p>
          <p
            className="dark:hover:text-gray-200 dark:text-gray-400 text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={() => {
              window.open(project && project.html_url ? project.html_url : "");
            }}
          >
            <BiGitRepoForked className="inline-block" />{" "}
            {project && project.forks_count ? project.forks_count : "0"} forks
          </p>
        </div>
      </div>
      <p>
        {project && project.description ? project.description : "Loading..."}
      </p>
    </div>
  );
}
