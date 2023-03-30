import useWindowDimensions from "@/lib/getwindowdimensions";
import Image from "next/image";
import React from "react";

const devicons = [
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  },
  {
    name: "go",
    link: "https://golang.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
  },
  {
    name: "rust",
    link: "https://www.rust-lang.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored.svg",
  },
  {
    name: "python",
    link: "https://www.python.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
  },
  {
    name: "java",
    link: "https://www.java.com/en/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
  },
  {
    name: "c",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg",
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  },
  {
    name: "Vue",
    link: "https://vuejs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg",
  },
  {
    name: "Angular",
    link: "https://angular.io/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg",
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
  },
  {
    name: "Nuxt.js",
    link: "https://nuxtjs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg",
  },
  {
    name: "Gatsby",
    link: "https://www.gatsbyjs.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg",
  },
  {
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
  },
  {
    name: "Sass",
    link: "https://sass-lang.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
  },
  {
    name: "Tailwind",
    link: "https://tailwindcss.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  },
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
  },
  {
    name: "Material UI",
    link: "https://material-ui.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
  },
  {
    name: "Redux",
    link: "https://redux.js.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
  },
  {
    name: "Vite",
    link: "https://vitejs.dev/",

    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
  },
  {
    name: "Webpack",
    link: "https://webpack.js.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg",
  },
  {
    name: "Node",
    link: "https://nodejs.org/en/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
  },
  {
    name: "Express",
    link: "https://expressjs.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
  },
  {
    name: "GraphQL",
    link: "https://graphql.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
  },
  {
    name: "MySQL",
    link: "https://www.mysql.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
  },
  {
    name: "Appwrite",
    link: "https://appwrite.io/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg",
  },
  {
    name: "Heroku",
    link: "https://www.heroku.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg",
  },
  {
    name: "Supabase",
    link: "https://supabase.io/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg",
  },
  {
    name: "Laravel",
    link: "https://laravel.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg",
  },
  {
    name: "Flutter",
    link: "https://flutter.dev/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg",
  },
  {
    name: "Docker",
    link: "https://www.docker.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "GitLab",
    link: "https://gitlab.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "Digital Ocean",
    link: "https://www.digitalocean.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  },
  {
    name: "Linux",
    link: "https://www.linux.org/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Android",
    link: "https://www.android.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "Google Cloud",
    link: "https://cloud.google.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
];

function Devicons(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 my-2">
      {devicons.map((devicon, key: number) => (
        <DeviconItem
          key={key}
          alt={devicon.name}
          link={devicon.link}
          src={devicon.src}
        />
      ))}
    </div>
  );
}

function DeviconItem({ alt, link, src }: deviconProps): JSX.Element {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  if (isMobile) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image alt={alt} src={src} width={26} height={26} />
      </a>
    );
  } else {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image alt={alt} src={src} width={30} height={30} />
      </a>
    );
  }
}

export default Devicons;

// function Devicons() {
//     return (
//       <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 my-2">
//         <a
//           href="https://www.typescriptlang.org/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="TypeScript"
//           />
//         </a>
//         <a
//           href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="JavaScript"
//           />
//         </a>
//         <a href="https://go.dev/doc/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Go"
//           />
//         </a>
//         <a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Rust"
//           />
//         </a>
//         <a href="https://www.python.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Python"
//           />
//         </a>
//         <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Java"
//           />
//         </a>
//         <a
//           href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="C"
//           />
//         </a>
//         <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="React"
//           />
//         </a>
//         <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Vue"
//           />
//         </a>
//         <a href="https://angular.io/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Angular"
//           />
//         </a>
//         <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="NextJs"
//           />
//         </a>
//         <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Nuxtjs"
//           />
//         </a>
//         <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Gatsby"
//           />
//         </a>
//         <a
//           href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="HTML5"
//           />
//         </a>
//         <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="CSS3"
//           />
//         </a>
//         <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Sass"
//           />
//         </a>
//         <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="TailwindCSS"
//           />
//         </a>
//         <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Bootstrap"
//           />
//         </a>
//         <a href="https://mui.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Material UI"
//           />
//         </a>
//         <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Redux"
//           />
//         </a>
//         <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Vite"
//           />
//         </a>
//         <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Webpack"
//           />
//         </a>
//         <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="NodeJS"
//           />
//         </a>
//         <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Express"
//           />
//         </a>
//         <a href="https://graphql.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="GraphQL"
//           />
//         </a>
//         <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="MongoDB"
//           />
//         </a>
//         <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="MySQL"
//           />
//         </a>
//         <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="PostgreSQL"
//           />
//         </a>
//         <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Firebase"
//           />
//         </a>
//         <a href="https://appwrite.io/" target="_blank" rel="noreferrer">
//           <img
//             src=""
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Appwrite"
//           />
//         </a>
//         <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Heroku"
//           />
//         </a>
//         <a href="https://supabase.io/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Supabase"
//           />
//         </a>
//         <a href="https://laravel.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Laravel"
//           />
//         </a>
//         <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
//           <img
//             src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//         <a href="https://docker.com/" target="_blank" rel="noreferrer">
//           <img
//             className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
//             height="36"
//             alt="Flutter"
//           />
//         </a>
//       </div>
//     );
//   }
