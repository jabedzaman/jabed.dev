// import useWindowDimensions from "@/lib/getwindowdimensions";
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
  // const { width } = useWindowDimensions();
  // const isMobile = width < 768;

  // if (isMobile) {
  //   return (
  //     <a href={link} target="_blank" rel="noopener noreferrer">
  //       <Image alt={alt} src={src} width={26} height={26} />
  //     </a>
  //   );
  // } else {
  return (
    <div title={alt}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image alt={alt} src={src} width={30} height={30} />
      </a>
    </div>
  );
}
// }

export default Devicons;
