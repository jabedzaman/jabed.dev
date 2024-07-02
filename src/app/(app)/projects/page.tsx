import type { Metadata } from "next";
import { Projects } from "~/components/home";

export const metadata: Metadata = {
  title: "projects",
  description: "A list of projects I have worked/working on.",
}

export default function Page() {
  return (
    <main>
      <Projects />
    </main>
  );
}
