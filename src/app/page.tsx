import { Hero, Projects, Stats } from "~/components/home";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-8 my-10">
      <Hero />
      <Projects />
      <Stats />
    </main>
  );
}
