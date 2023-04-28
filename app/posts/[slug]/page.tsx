// app/page.js

export default async function Home({ params }: any) {
  // Optionally provide a type for your frontmatter object
  const slug = params.slug;

  return <>{slug}</>;
}
