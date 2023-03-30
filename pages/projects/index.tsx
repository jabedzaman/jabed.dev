import ProjectItem from "@/components/Project";
import { GetStaticProps } from "next";
import React from "react";

function index({ data }: statsResponsedata) {
    console.log(data)
  return (
    <div>
      <h1>Projects</h1>
      <div className="flex flex-wrap max-w-5xl">
        {/* {data.data.repos &&
          data.data.repos.map((repo, key) => (
            <ProjectItem
              id={repo.id}
              name={repo.name}
              description={repo.description}
              stargazers_count={repo.stars}
              forks={0}
              language={"JavaScript"}
            />
          ))} */}
      </div>
    </div>
  );
}

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.jabed.me/stats");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
