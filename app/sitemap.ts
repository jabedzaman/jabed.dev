import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://jabed.me/post/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ['', '/about', '/post', '/guestbook', '/about'].map(
    (route) => ({
      url: `https://jabed.me${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
