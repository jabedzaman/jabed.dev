import ProjectItem from "@/components/Project";
import Readme from "@/components/Readme";
import Sidebar from "@/components/Sidebar";
import { GetStaticProps } from "next";

export default function Home({ data }: statsResponsedata) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-3">
        <Readme
          followers={data.data.followers || 0}
          wakaTime={data.data.wakatime}
          stars={data.data.total_stars || 0}
          publicRepos={data.data.public_repos || 0}
        />
        <h1 className="md:text-3xl text-xl mt-10 font-bold">Pinned Repos</h1>
        <section className="flex flex-wrap mb-10 mt-1">
          <ProjectItem
            description="Multiplatform Music dowloader"
            forks={5}
            id={1}
            language="JavaScript"
            stargazers_count={14}
            name="Spotilader"
          />
          <ProjectItem
            description="Anime Streaming Client"
            forks={1}
            id={2}
            language="JavaScript"
            stargazers_count={1}
            name="Bozo"
          />
        </section>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.jabed.me/stats");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
