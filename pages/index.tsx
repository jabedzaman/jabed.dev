import Contact from "@/components/Contact";
import Devicons from "@/components/Devicons";
import ProjectItem from "@/components/Project";
import Readme from "@/components/Readme";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <div className="md:col-span-3">
        <Readme followers={27} wakaTime={400} stars={44} publicRepos={9} />
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
        {/* <Contact /> */}
      </div>
    </div>
  );
}
