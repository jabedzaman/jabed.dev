import { getWritings } from "~/libs/utils";

export default async function sitemap() {
  const writings = getWritings().map((w) => ({
    url: `https://jabed.dev/writings/${w.slug}`,
    lastModified: w.metadata.date,
  }));

  const routes = ["/"].map((route) => ({
    url: `https://jabed.dev${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...writings, ...routes];
}
