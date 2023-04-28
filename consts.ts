export type SiteConfig = {
  title: string;
  description: string;
  openGraph: OpenGraph;
  twitter: {
    title: string;
    creator: string;
    description: string;
  };
};

type OpenGraph = {
  title: string;
  description: string;
  url: string;
  site_name: string;
  locale: string;
};

export const siteConfig: SiteConfig = {
  title: "Jabed",
  description: "Full Stack Developer",
  openGraph: {
    title: "Jabed",
    description: "Full Stack Developer",
    url: "https://jabed.me/",
    site_name: "jabed",
    locale: "en_US",
  },
  twitter: {
    title: "jabed",
    creator: "@xenseee",
    description: "Full Stack Developer",
  },
};

type socials = {
  github: string;
  twitter: string;
  linkedin: string;
  email: string;
};

export const socials: socials = {
  github: "jabedzaman",
  twitter: "xenseee",
  linkedin: "jabedzaman",
  email: "jabed@tuta.io",
};

export const info = {
  name: "Jabed Zaman",
  title: "Full Stack Developer",
  birthDate: "2004-07-22",
  headingTexts: ["Hey! I am Jabed ...", "Developer.tsx", "Programmer.rs"],
  description:
    "I am a full stack web/app developer and use technologies like react, nodejs, tailwind, firebase, appwrite, react native to build full stack web apps and android applications. In addition to it I am a Linux enthusiast. Being curious about technology gives me the banger to get into coding and development. I enjoy doing this and keep trying to polish myself with the bleding tech stack in the market. ",
};
