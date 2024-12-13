import { postMetaData, projectMetaData } from "@/libs/utils";

export default async function sitemap() {
  const articles = postMetaData.map((p) => ({
    url: `https://jabed.dev/posts/${p.slug}`,
    lastModified: p.date,
  }));

  const projects = projectMetaData.map((p) => ({
    url: `https://jabed.dev/projects/${p.slug}`,
    lastModified: p.date,
  }));

  const routes = [
    "",
    "/music",
    "/uses",
    "/faq",
    "/legal/terms",
    "/posts",
    "/projects",
  ].map((route) => ({
    url: `https://jabed.dev${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...articles, ...projects];
}
