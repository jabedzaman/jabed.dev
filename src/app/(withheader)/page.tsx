import { Spotify } from "~/components";
import { Articles, Hero, Mail, Projects } from "~/components/home";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-8 my-5">
      <Hero />
      <Projects />
      <Articles />
      <Mail />
      <Spotify />
    </main>
  );
}
