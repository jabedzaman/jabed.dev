import type { Metadata } from "next";
import Image from "next/image";
import { bricolage } from "~/libs";

export const metadata: Metadata = {
  title: "stack",
  description: "My Tech Stack",
};

export default function Page() {
  return (
    <main className="my-10">
      <h1 className={`${bricolage.className} text-2xl`}>My Tech Stack</h1>
      <p className="text-[#5f5f5f] text-sm">
        These are the technologies I have worked with and have experience in.
      </p>
      <div className="flex flex-wrap justify-center gap-4 my-20">
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
            width="100"
            height="100"
            alt="TypeScript"
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            width="100"
            height="100"
            alt="React"
          />
        </a>
        <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
            width="100"
            height="100"
            alt="React"
          />
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            width="100"
            height="100"
            alt="Redux"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            width="100"
            height="100"
            alt="TailwindCSS"
          />
        </a>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
            width="100"
            height="100"
            alt="NextJs"
          />
        </a>
        <a href="https://android.org/docs" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            width="100"
            height="100"
            alt="Android"
          />
        </a>
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            width="100"
            height="100"
            alt="NodeJS"
          />
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
            width="100"
            height="100"
            alt="Express"
          />
        </a>
        <a href="https://socket.io.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
            width="100"
            height="100"
            alt="socket.io"
          />
        </a>
        <a href="https://graphql.org/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
            width="100"
            height="100"
            alt="GraphQL"
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
            width="100"
            height="100"
            alt="MongoDB"
          />
        </a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
            width="100"
            height="100"
            alt="PostgreSQL"
          />
        </a>
        <a href="https://www.redis.io/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
            width="100"
            height="100"
            alt="PostgreSQL"
          />
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
            width="100"
            height="100"
            alt="Firebase"
          />
        </a>
        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
            width="100"
            height="100"
            alt="AWS"
          />
        </a>
        <a href="https://docker.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
            width="100"
            height="100"
            alt="docker"
          />
        </a>
        <a href="https://kubernetes.io/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
            width="100"
            height="100"
            alt="docker"
          />
        </a>
        <a href="https://helm.sh/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg"
            width="100"
            height="100"
            alt="docker"
          />
        </a>
        <a href="https://digitalocean.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
            width="100"
            height="100"
            alt="digitalocean"
          />
        </a>
        <a href="https://nginx.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
            width="100"
            height="100"
            alt="ngnix"
          />
        </a>
        <a href="https://cloudflare.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
            width="100"
            height="100"
            alt="cloudflare"
          />
        </a>
        <a href="https://elasticsearch.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg"
            width="100"
            height="100"
            alt="elasticsearch"
          />
        </a>
        <a href="https://rabbitmq.com/" target="_blank" rel="noreferrer">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg"
            width="100"
            height="100"
            alt="rabbitmq"
          />
        </a>
      </div>
    </main>
  );
}
