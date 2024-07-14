import { Metadata } from "next";
import { WorkList } from "~/components/work";

export const metadata: Metadata = {
  title: "work",
  description: "my current and past work experiences",
};

export default function Page() {
  return (
    <main className="my-10">
      <WorkList />
    </main>
  );
}