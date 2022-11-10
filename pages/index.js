import Hero from "../components/Hero"; 
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  BLOGS_PATH,
  blogFilePaths,
  projectFilePaths,
  PROJECTS_PATH,
} from "../utils/mdxUtils";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function Home({ projects, blogs }) {
  return (
    <main className="overflow-hidden">
      <div id="Hero">
        <Hero />
      </div>
      <Blogs blogs={blogs} /> 
      {/* <Skills/> */}
      <div id="Projects">
        <Projects projects={projects} />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </main>
  );
}
export function getStaticProps() {
  const blogs = blogFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BLOGS_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
      filePath,
    };
  });
  const projects = projectFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { data } = matter(source);
    return {
      data,
      filePath,
    };
  });
  function compare(a, b) {
    if (a.data.index < b.data.index) {
      return -1;
    }
    if (a.data.index > b.data.index) {
      return 1;
    }
    return 0;
  }
  blogs.sort(compare);
  return { props: { blogs, projects } };
}
