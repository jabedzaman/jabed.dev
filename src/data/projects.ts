export type ProjectProps = {
  displayName: string;
  description: string;
  link: string;
  preview?: string;
  repo: {
    owner: string;
    name: string;
    isPrivate: boolean;
  };
  techStack: string[];
  status: "active" | "unmaintained" | "on-going";
};

export const projects: ProjectProps[] = [
  {
    displayName: "rubiks",
    description:
      "Backup, Sync, Manage Securely store your Memories in Cloud with ease, leavering microservices architecture, and modern technologies, an personalized cloud storage solution.\nAlong with the core features, files are stored in an e-2-e encrypted format, and the user has full control over the encryption keys.",
    link: "https://rubiks.cloud",
    repo: {
      owner: "jabedzaman",
      name: "rubiks",
      isPrivate: true,
    },
    preview: "https://rubiks.cloud/",
    techStack: [
      "microservices",
      "rabbitmq",
      "react",
      "@redux/toolkit",
      "rtk-query",
      "shadcn-ui",
      "nestjs",
      "nodejs",
      "postgresql",
      "mongodb",
      "ffmpeg",
      "clamav",
      "aws",
      "docker",
      "kubernetes",
      "turborepo",
      "go lang",
      "typescript",
    ],
    status: "active",
  },
  {
    displayName: "spotiloader (unmaintained)",
    description:
      "Download your Spotify playlists and songs with ease. Spotiloader, react native app, allows you to download your Spotify, Apple Music, and YouTube playlists and songs with ease.",
    link: "https://github.com/jabedzaman/spotiloader",
    repo: {
      owner: "jabedzaman",
      name: "spotiloader",
      isPrivate: false,
    },
    techStack: [
      "react-native",
      "react",
      "nodejs",
      "express",
      "spotify-api",
      "youtube-api",
    ],
    status: "unmaintained",
  },
  {
    displayName: "ransom",
    description:
      "Complete SAAS Starter Kit with Authentication, Multi tenancy, Internationalization, stripe integration, and more. We all have that one side project we're eager to launch. But setting up authentication, authorization, payment gateways, and other crucial features can be a real time sink. Ransom comes packed with all these, helping you get your project off the ground in no time.",
    link: "https://github.com/jabedzaman/ransom",
    repo: {
      owner: "jabedzaman",
      name: "ransom",
      isPrivate: false,
    },
    techStack: [
      "react",
      "nextjs",
      "@redux/toolkit",
      "rtk-query",
      "shadcn-ui",
      "nestjs",
      "nodejs",
      "postgresql",
      "turborepo",
      "vercel",
    ],
    status: "on-going",
  },
];
