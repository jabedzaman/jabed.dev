import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Blogposts from "../components/Blogposts";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <div id="blogs">
        <Blogposts />
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}
      <div className="h-20" />
    </main>
  );
}
