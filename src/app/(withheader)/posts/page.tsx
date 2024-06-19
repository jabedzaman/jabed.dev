import { Metadata } from "next";
import { Articles } from "~/components/home";

export const metadata: Metadata = {
  title: "posts",
  description: "Articles, guides, tips about various tech",
};

export default function Page() {
  return (
    <main className="my-10">
      <Articles />
    </main>
  );
}
