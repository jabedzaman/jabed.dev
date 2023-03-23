import Link from "next/link";
import React from "react";
import { AiOutlineBook, AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import projects from "../data/projects.json";

// function Projects() {
//   return (
//     <section className="lg:px-0 px-5 my-5">
//       <h1 className="lg:text-4xl md:text-2xl text-lg font-bold ">
//         Featured Projects
//       </h1>
//       <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
//         Some of my featured side projects
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
//         {projects.map((project) => (
//           <div key={project.id} className="p-1">
//             <Link href={`/projects/${project.slug}`}>
//               <img
//                 src={project.image}
//                 className="w-full lg:h-52 h-48 max-w-sm  shadow-xl mx-auto object-cover border-2 border-gray-200 p-1 hover:shadow-2xl"
//                 alt={project.title}
//               />
//               <h2 className="md:text-xl font-bold my-2 text-lg text-center lg:text-left">
//                 {project.title}
//               </h2>
//               <p className="text-gray-500 text-center text-xs md:text-sm lg:text-left">
//                 {project.description}
//               </p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

function Projects() {
  return (
    <div className="flex justify-end p-5">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold">Featured Projects</h1>
        <section className="flex flex-wrap ">
          {projects.map((project) => (
            <div key={project.id} className="w-full md:w-1/2 p-2">
              <Link href={`/projects/${project.slug}`}>
                <Item name={project.title} description={project.description} />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <div className="border py-2 md:px-5 px-3 flex flex-col justify-between max-h-30 h-full hover:shadow-lg duration-150 ease-in-out">
      <div>
        <span className="flex flex-row items-center space-x-2">
          <AiOutlineBook />
          <p className="font-semibold">{props.name}</p>
        </span>
        <span className="text-gray-500 text-sm">{props.description}</span>
      </div>
      <span className="flex flex-row  space-x-3 justify-end">
        <div className="flex flex-row space-x-1 items-center">
          <BiGitRepoForked />
          <p>10</p>
        </div>
        <div className="flex flex-row space-x-1 items-center">
          <AiOutlineStar />
          <p>16</p>
        </div>
      </span>
    </div>
  );
}

export default Projects;
