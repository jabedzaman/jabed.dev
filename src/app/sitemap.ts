import { MetadataRoute } from "next";
import { postMetaData } from "~/libs/utils/mdxUtils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: "https://jabed.dev",
      lastModified: new Date(),
    },
    {
      url: "https://jabed.dev/projects",
      lastModified: new Date(),
    },
    {
      url: "https://jabed.dev/projects",
      lastModified: new Date(),
    },
    {
      url: "https://jabed.dev/work",
      lastModified: new Date(),
    },
    {
      url: "https://jabed.dev/music",
      lastModified: new Date(),
    }
  ];
  postMetaData.forEach((post) => {
    links.push({
      url: `https://jabed.dev/posts/${post.slug}`,
      lastModified: new Date(post.date),
    });
  });
  return links;
}
