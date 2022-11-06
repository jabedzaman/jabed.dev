import React from "react";
import { 
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiVercel,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSupabase,
  SiHeroku,
  SiGit,
  SiGithub, 
  SiManjaro,
  SiDebian,
  SiLinux,
  SiDocker,
  SiAuth0,
  SiAdobexd,
  SiGimp,
} from "react-icons/si";

function Skills() {
  return (
    <section>
      <div className="max-w-5xl mx-auto my-10">
        <h1 className="lg:text-3xl text-2xl font-bold lg:text-left text-center mt-48 lg:mt-20 mb-2 uppercase">
          My TechStack
        </h1>
        <p className="lg:text-left text-center dark:text-gray-400 text-gray-800">
          These are the tools and technolgies I am skilled in ...
        </p>
        <div className="grid gird-cols-3 grid-flow-col my-10">
          <div className="p-1">
          <SiHtml5 className="skills" />
          </div>
          <div className="p-1">
          <SiCss3 className="skills" />
          </div>
          <div className="p-1">
          <SiJavascript className="skills" />
          </div>
          <div className="p-1">
          <SiTypescript className="skills" />
          </div>
          <div className="p-1">
          <SiPython className="skills" />
          </div>
          <div className="p-1">
          <SiReact className="skills" />
          </div>
          <div className="p-1">
          <SiNextdotjs className="skills" />
          </div>
          <div className="p-1">
          <SiNodedotjs className="skills" />
          </div>
          <div className="p-1">
          <SiTailwindcss className="skills" />
          </div>
          <div className="p-1">
          <SiMongodb className="skills" />
          </div>
          <div className="p-1">
          <SiFirebase className="skills" />
          </div>
          <div className="p-1">
          <SiSupabase className="skills" />
          </div>
          <div className="p-1">
          <SiAuth0 className="skills" />
          </div>
          <div className="p-1">
          <SiStrapi className="skills" />
          </div>
          <div className="p-1">
          <SiVercel className="skills" />
          </div>
          <div className="p-1">
          <SiHeroku className="skills" />
          </div>
          <div className="p-1">
          <SiFigma className="skills" />
          </div>
          <div className="p-1">
          <SiAdobexd className="skills" />
          </div>
          <div className="p-1">
          <SiGimp className="skills" />
          </div>
          <div className="p-1">
          <SiGit className="skills" />
          </div>
          <div className="p-1">
          <SiGithub className="skills" />
          </div>
          <div className="p-1">
          <SiLinux className="skills" />
          </div>
          <div className="p-1">
          <SiManjaro className="skills" />
          </div>
          <div className="p-1">
          <SiDebian className="skills" />
          </div>
          <div className="p-1">
          <SiDocker className="skills" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
