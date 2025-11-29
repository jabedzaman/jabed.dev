import { getWritings } from "~/libs/utils";

export async function GET(request: Request) {
  const writings = getWritings();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
 <title>jabed.dev</title>
 <description>full stack developer</description>
 <link>https://jabed.dev</link>
 <copyright>copyright 2025</copyright>
 ${writings.map(({ metadata, slug }) => {
   return `<item>
    <title>${metadata.title}</title>
    <description>${metadata.summary}</description>
    <link>https://jabed.dev/writings/${slug}</link>
    <pubDate>${metadata.date}</pubDate>
    <guid isPermaLink="false">${slug}</guid>
 </item>`;
 })}
</channel>
</rss>`;

  const headers = new Headers({ "content-type": "application/xml" });

  return new Response(rssFeed, { headers });
}
