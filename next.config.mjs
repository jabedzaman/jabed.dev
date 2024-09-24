/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "ts", "js", "mjs", "mdx"],
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
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jabed.dev",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
