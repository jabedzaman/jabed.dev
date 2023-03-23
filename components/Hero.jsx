import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { IoLogoReddit } from "react-icons/io5";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { BsPen } from "react-icons/bs";

export default function Hero() {
  const [active, setActive] = useState("overview");
  return (
    <div className="p-5 flex md:flex-row flex-col lg:justify-between">
      <section className="">
        <div className="flex lg:flex-col flex-row items-center md:items-start space-x-2 md:space-x-0">
          <LazyLoadImage
            src="https://avatars.githubusercontent.com/u/99767817?v=4"
            className=" rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 shadow-2xl border-4 border-gray-200 z-10"
            alt="Jabed Zaman"
            effect="blur"
          />
          <div className="text-center md:text-left flex flex-col mt-2 mb-5">
            <span className="text-2xl font-bold">Jabed Zaman</span>
            <span className="">Full Stack Developer</span>
          </div>
        </div>

        <div className="mb-5 mt-3">
          <Socials />
        </div>
      </section>
      <section className="max-w-3xl">
        <div className="flex flex-row space-x-4 my-1">
          <div
            className={`${
              active === "overview" && "border-b-2 border-orange-500"
            }`}
          >
            <div
              className={`flex flex-row items-center space-x-1 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-lg 
            ${active === "overview" && "font-semibold"}
            `}
              onClick={() => setActive("overview")}
            >
              <GiOpenBook className="text-lg" />
              <p className="text-lg">Overview</p>
            </div>
          </div>
          <div
            className={`${
              active === "guestbook" && "border-b-2 border-orange-500"
            }`}
          >
            <div
              className={`flex flex-row items-center space-x-1 cursor-pointer hover:bg-gray-100 p-1 rounded-lg 
            ${active === "guestbook" && "font-semibold"}
            `}
              onClick={() => setActive("guestbook")}
            >
              <BsPen className="text-lg" />
              <p className="text-lg">Guestbook</p>
            </div>
          </div>
        </div>
        {active === "overview" ? (
          <Sidebar/>
        ) : active === "guestbook" ? (
          <div className="max-w-3xl w-full">loading...</div>
        ) : null}
      </section>
    </div>
  );
}

function Socials() {
  return (
    <>
      <div>
        <a
          href="https://github.com/jabedzaman"
          className="flex flex-row items-center space-x-1"
          target={"_blank"}
        >
          <FiGithub className="" />
          <p className="font-semibold hover:underline underline-offset-3">
            jabedzaman
          </p>
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/xenseee"
          className="flex flex-row items-center space-x-1"
          target={"_blank"}
        >
          <FiTwitter className="" />
          <p className="hover:text-blue-500 hover:underline underline-offset-3">
            xenseee
          </p>
        </a>
      </div>
      <div>
        <a
          href="https://reddit.com/u/jabedzaman"
          className="flex flex-row items-center space-x-1"
          target={"_blank"}
        >
          <IoLogoReddit className="" />
          <p className="hover:text-blue-500 hover:underline underline-offset-3">
            jabedzaman
          </p>
        </a>
      </div>
    </>
  );
}

function Sidebar() {
  const [text] = useTypewriter({
    words: ["Hey! I am Jabed", "developer.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  const [summaryVisible, setSummaryVisible] = React.useState(false);
  return (
    <section className="border md:p-5 lg:p-7 p-3 z-10 ">
      <p className="font-mono text-xs">
        jabedzaman / <span className="text-gray-500">README</span>.md
      </p>
      <h1 className="flex items-center text-2xl md:text-3xl lg:text-4xl font-bold">
        <img
          src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/gifs/wave.gif"
          alt="wave"
          width="30"
          className="mr-1"
        />
        <span className="mr-1">{text}</span>
        <Cursor cursorColor="#0492c2" />
      </h1>
      <p>
        I am a self-taught web developer. I love to build things for the web and
        learn new things.
      </p>
      <hr className="my-2" />
      <section className="flex md:flex-row md:space-x-1 space-x-0 flex-col md:space-y-0 space-y-1">
        <img
          src="https://github-readme-stats.vercel.app/api?username=jabedzaman&theme=light&hide_border=false&include_all_commits=true&count_private=true"
          height={"150"}
          alt=""
        />
        {/* <div className="border  md:w-1/2 w-full rounded-sm py-2 px-4">
          <h1 className="text-sm md:text-lg font-bold">Total Hours Coded</h1>
          <div>
            <p className="">
              <span className="font-bold text-3xl">300</span>{" "}
              <span>hours </span>
            </p>
            <p className="text-xs text-gray-500">Since 2023-01-01</p>
          </div>
        </div> */}
      </section>
      <hr className="my-2" />
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
        🧰 Skills and tools
      </h1>
      <Devicons />
      <hr className="my-2" />
      <span className="flex  flex-row">
        <h1 className="font-semibold">wanna know more?</h1>
        {summaryVisible ? (
          <AiFillCaretUp
            className="text-2xl cursor-pointer"
            onClick={() => setSummaryVisible(!summaryVisible)}
          />
        ) : (
          <AiFillCaretDown
            className="text-2xl cursor-pointer"
            onClick={() => setSummaryVisible(!summaryVisible)}
          />
        )}
      </span>
      {summaryVisible && (
        <p>
          I am a full stack web/app developer and use technologies like react,
          nodejs, tailwind, firebase, appwrite, react native to build full stack
          web apps and android applications. In addition to it I am a Linux
          enthusiast. Being curious about technology gives me the banger to get
          into coding and development. I enjoy doing this and keep trying to
          polish myself with the bleding tech stack in the market. <br />
          I use arch BTW
        </p>
      )}
    </section>
  );
}

function Devicons() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 my-2">
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
          width="36"
          height="36"
          alt="TypeScript"
        />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
          width="36"
          height="36"
          alt="JavaScript"
        />
      </a>
      <a href="https://go.dev/doc/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg"
          width="36"
          height="36"
          alt="Go"
        />
      </a>
      <a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored.svg"
          width="36"
          height="36"
          alt="Rust"
        />
      </a>
      <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
          width="36"
          height="36"
          alt="Python"
        />
      </a>
      <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
          width="36"
          height="36"
          alt="Java"
        />
      </a>
      <a
        href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
          width="36"
          height="36"
          alt="C"
        />
      </a>
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          width="36"
          height="36"
          alt="React"
        />
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
          width="36"
          height="36"
          alt="Vue"
        />
      </a>
      <a href="https://angular.io/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg"
          width="36"
          height="36"
          alt="Angular"
        />
      </a>
      <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
          width="36"
          height="36"
          alt="NextJs"
        />
      </a>
      <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
          width="36"
          height="36"
          alt="Nuxtjs"
        />
      </a>
      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
          width="36"
          height="36"
          alt="Gatsby"
        />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          width="36"
          height="36"
          alt="HTML5"
        />
      </a>
      <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          width="36"
          height="36"
          alt="CSS3"
        />
      </a>
      <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
          width="36"
          height="36"
          alt="Sass"
        />
      </a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          width="36"
          height="36"
          alt="TailwindCSS"
        />
      </a>
      <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
          width="36"
          height="36"
          alt="Bootstrap"
        />
      </a>
      <a href="https://mui.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
          width="36"
          height="36"
          alt="Material UI"
        />
      </a>
      <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
          width="36"
          height="36"
          alt="Redux"
        />
      </a>
      <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
          width="36"
          height="36"
          alt="Vite"
        />
      </a>
      <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
          width="36"
          height="36"
          alt="Webpack"
        />
      </a>
      <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
          width="36"
          height="36"
          alt="NodeJS"
        />
      </a>
      <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
          width="36"
          height="36"
          alt="Express"
        />
      </a>
      <a href="https://graphql.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
          width="36"
          height="36"
          alt="GraphQL"
        />
      </a>
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
          width="36"
          height="36"
          alt="MongoDB"
        />
      </a>
      <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
          width="36"
          height="36"
          alt="MySQL"
        />
      </a>
      <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
          width="36"
          height="36"
          alt="PostgreSQL"
        />
      </a>
      <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
          width="36"
          height="36"
          alt="Firebase"
        />
      </a>
      <a href="https://appwrite.io/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg"
          width="36"
          height="36"
          alt="Appwrite"
        />
      </a>
      <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
          width="36"
          height="36"
          alt="Heroku"
        />
      </a>
      <a href="https://supabase.io/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
          width="36"
          height="36"
          alt="Supabase"
        />
      </a>
      <a href="https://laravel.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
          width="36"
          height="36"
          alt="Laravel"
        />
      </a>
      <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          width="36"
          height="36"
          alt="Flutter"
        />
      </a>
    </div>
  );
}
