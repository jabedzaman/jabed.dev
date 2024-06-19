import RSS from "rss";
import { postMetaData } from "~/libs/utils/mdxUtils";

const feed = new RSS({
  title: "Jabed Zaman - Blog",
  description: "Personal blog of Jabed Zaman",
  site_url: "https://jabed.dev",
  feed_url: `https://jabed.dev/rss.xml`,
  copyright: `${new Date().getFullYear()} Jabed Zaman`,
  language: "en",
  pubDate: new Date(),
});

postMetaData.forEach((post) => {
  feed.item({
    title: post.title,
    description: post.summary,
    url: `https://jabed.dev/posts/${post.slug}`,
    guid: post.slug,
    date: post.date,
  });
});

export async function GET() {
  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
