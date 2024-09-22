import { getProjectMdx, projectMetaData } from "@/libs/utils";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Content } from "./content";

export const generateStaticParams = async () => {
  return projectMetaData.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const project = projectMetaData.find(
    (project) => project.slug === params.slug
  );
  if (!project) {
    return notFound();
  }
  return {
    title: project.title,
    description: project.summary,
    keywords: project.keywords,
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const project = projectMetaData.find(
    (project) => project.slug === params.slug
  );
  if (!project) {
    return notFound();
  }
  const { content, frontmatter } = await getProjectMdx(params.slug);
  const tags = frontmatter.keywords.split(",");
  return (
    <main className="my-10">
      <h1 className="text-2xl">{frontmatter.title}</h1>
      <span className="text-xs text-[#666666]">
        {moment(frontmatter.date).format("MMMM D, YYYY")} (
        {moment(frontmatter.date).fromNow()})
      </span>
      <div className="flex flex-row flex-wrap gap-2 my-2">
        {tags.map((tech, index) => (
          <span
            key={index}
            className="text-xs ext-[#666666] md:px-2 px-1 md:py-1 py-0.5 rounded-md hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
          >
            # {tech}
          </span>
        ))}
      </div>
      <Content content={content} />
    </main>
  );
}
