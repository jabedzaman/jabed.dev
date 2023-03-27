import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import StatsCard from "./StatsCard";
import Wakatime from "./Wakatime";

type Props = {
  stars: number;
  followers: number;
  publicRepos: number;
  wakaTime: number;
};

function Readme({ stars, followers, publicRepos, wakaTime }: Props) {
  const [text] = useTypewriter({
    words: ["Hey! I am Jabed", "developer.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  const [summaryVisible, setSummaryVisible] = useState(false);
  return (
    <section className="border border-gray-200 dark:border-gray-700 lg:max-w-3xl md:max-w-xl  md:p-5 lg:p-7 p-3 z-10 md:hover:shadow-lg md:dark:hover:shadow-gray-900 duration-150 ease-in-out ">
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
      <p className="text-gray-500 md:text-sm text-xs">
        I am a self-taught developer. I love to build android apps and things
        for the web.
      </p>
      <hr className="my-2 bg-gray-200 dark:bg-gray-700" />
      <section className="flex md:flex-row md:space-x-1 space-x-0 flex-col md:space-y-0 space-y-1">
        <StatsCard stars={stars} followers={followers} publicRepos={publicRepos} />
        <Wakatime totalHours={wakaTime} />
      </section>
      <hr className="my-2 bg-gray-200 dark:bg-gray-700" />
      <h1 className="font-semibold">🧰 Skills and tools</h1>
      <Devicons />
      <hr className="my-2 h-1 bg-gray-200 dark:bg-gray-700" />
      <span className="flex  flex-row items-center">
        {summaryVisible ? (
          <AiFillCaretDown
            className="text-xl cursor-pointer"
            onClick={() => setSummaryVisible(!summaryVisible)}
          />
        ) : (
          <AiFillCaretRight
            className="text-xl cursor-pointer"
            onClick={() => setSummaryVisible(!summaryVisible)}
          />
        )}
        <h1 className="font-semibold">wanna know more?</h1>
      </span>
      {summaryVisible && (
        <p className="text-xs md:text-sm">
          I am a full stack web/app developer and use technologies like react,
          nodejs, tailwind, firebase, appwrite, react native to build full stack
          web apps and android applications. In addition to it I am a Linux
          enthusiast. Being curious about technology gives me the banger to get
          into coding and development. I enjoy doing this and keep trying to
          polish myself with the bleding tech stack in the market. <br />I use
          arch BTW
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
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
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
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="JavaScript"
        />
      </a>
      <a href="https://go.dev/doc/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Go"
        />
      </a>
      <a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Rust"
        />
      </a>
      <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Python"
        />
      </a>
      <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
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
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="C"
        />
      </a>
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="React"
        />
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Vue"
        />
      </a>
      <a href="https://angular.io/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Angular"
        />
      </a>
      <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="NextJs"
        />
      </a>
      <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Nuxtjs"
        />
      </a>
      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
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
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="HTML5"
        />
      </a>
      <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="CSS3"
        />
      </a>
      <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Sass"
        />
      </a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="TailwindCSS"
        />
      </a>
      <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Bootstrap"
        />
      </a>
      <a href="https://mui.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Material UI"
        />
      </a>
      <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Redux"
        />
      </a>
      <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Vite"
        />
      </a>
      <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Webpack"
        />
      </a>
      <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="NodeJS"
        />
      </a>
      <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Express"
        />
      </a>
      <a href="https://graphql.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="GraphQL"
        />
      </a>
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="MongoDB"
        />
      </a>
      <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="MySQL"
        />
      </a>
      <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="PostgreSQL"
        />
      </a>
      <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Firebase"
        />
      </a>
      <a href="https://appwrite.io/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Appwrite"
        />
      </a>
      <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Heroku"
        />
      </a>
      <a href="https://supabase.io/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Supabase"
        />
      </a>
      <a href="https://laravel.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Laravel"
        />
      </a>
      <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
      <a href="https://docker.com/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
          height="36"
          alt="Flutter"
        />
      </a>
    </div>
  );
}

export default Readme;
