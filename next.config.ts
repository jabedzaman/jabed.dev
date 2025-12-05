import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{ hostname: "i.scdn.co" }],
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/jabedzaman",
        permanent: true,
      },
      {
        source: "/git",
        destination: "https://github.com/jabedzaman",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "https://cdn.jabed.dev/resume.pdf",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "https://cdn.jabed.dev/resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
