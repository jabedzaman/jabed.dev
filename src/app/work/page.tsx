import { Metadata } from "next";
import { WorkList } from "~/components/work";

export const metadata: Metadata = {
  title: "🧳",
};

export default function Page() {
  return (
    <main className="my-10">
      <WorkList />
    </main>
  );
}
