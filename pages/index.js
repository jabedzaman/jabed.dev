// import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
// import Blogposts from "../components/Blogposts";
// import Skills from "../components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="skills">
        {/* <Skills /> */}
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* <div id="blogs">
        <Blogposts />
      </div> */}
      {/* <div id="contact">
        <Contact />
      </div> */}
      <div className="h-40" />
    </main>
  );
}
