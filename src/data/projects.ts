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
      "aws",
      "docker",
      "kubernetes",
      "turborepo",
    ],
    status: "active",
  },
  {
    displayName: "vesper",
    description:
      "Set up your database in seconds, and let vesper handle the rest\nCause your primary focus should be on building your app, not managing database!! Can be easily self hosted with a single install script. Using `@kubernetes/client-node` the database is managed in a kubernetes cluster and user can easily interact with the database using the react dashboard.",
    link: "https://vesper.rubiks.cloud/",
    preview: "https://vesper.rubiks.cloud/",
    repo: {
      owner: "vespeross",
      name: "vesper",
      isPrivate: true,
    },
    techStack: [
      "react",
      "@redux/toolkit",
      "rtk-query",
      "shadcn-ui",
      "nestjs",
      "nodejs",
      "postgresql",
      "kubernetes",
    ],
    status: "on-going",
  },
  {
    displayName: "ransom",
    description:
      "Complete SAAS Starter Kit with Authentication, Authorization, Internationalization, payment gateway, and more. We all have that one side project we're eager to launch. But setting up authentication, authorization, payment gateways, and other crucial features can be a real time sink. Ransom comes packed with all these, helping you get your project off the ground in no time.",
    link: "https://ransom.jabed.dev/",
    preview: "https://ransom.jabed.dev/",
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
      "vercel"
    ],
    status: "on-going",
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
];
