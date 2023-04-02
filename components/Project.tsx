import Link from "next/link";
import React from "react";
import { AiOutlineBook, AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";


function ProjectItem(props: ProjectProps) {
  let langcolor = "";
  switch (props.language) {
    case "JavaScript":
      langcolor = "bg-yellow-400";
      break;
    case "TypeScript":
      langcolor = "bg-blue-400";
      break;
    case "HTML":
      langcolor = "bg-red-400";
      break;
    case "CSS":
      langcolor = "bg-blue-400";
      break;
    case "Python":
      langcolor = "bg-yellow-400";
      break;
    case "C#":
      langcolor = "bg-purple-400";
      break;
    default:
      langcolor = "bg-gray-400";
  }
  return (
    <div className="md:w-1/2 w-full my-1 cursor-pointer">
      <a href={props.url}>
        <div className="py-2 m-1 border border-gray-200 dark:border-gray-700 md:px-5 px-3 flex flex-col justify-between max-h-30 h-full hover:shadow-lg dark:hover:shadow-gray-900 duration-150 ease-in-out">
          <div>
            <span className="flex flex-row items-center space-x-2">
              <AiOutlineBook />
              <p className="font-semibold">{props.name}</p>
            </span>
            <span className="text-gray-500 text-sm">
              {props.description.length > 80 ? (
                <p>{props.description.substring(0, 80)}...</p>
              ) : (
                <p>{props.description}</p>
              )}
            </span>
          </div>
          <span className="flex flex-row  space-x-3 justify-between">
            <div>
              <span className="flex flex-row items-center space-x-2">
                <span className={`rounded-full w-2 h-2 ${langcolor}`} />
                <p className="text-gray-500 text-sm">{props.language}</p>
              </span>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="flex flex-row space-x-1 md:text-sm text-xs  items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-300">
                <BiGitRepoForked />
                <p>
                  {props.forks} <span>forks</span>
                </p>
              </div>
              <div className="flex flex-row space-x-1  md:text-sm text-xs items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 ">
                <AiOutlineStar />
                <p>
                  {props.stargazers_count} <span>stars</span>
                </p>
              </div>
            </div>
          </span>
        </div>
      </a>
    </div>
  );
}

export default ProjectItem;
