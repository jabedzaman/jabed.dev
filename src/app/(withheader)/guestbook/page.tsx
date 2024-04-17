import { Metadata } from "next";
import { Input, List } from "~/components/guestbook";

export const metadata: Metadata = {
  title: "🖊️",
};

export default function Page() {
  return (
    <main className="my-10">
      <Input/>
      <List />
    </main>
  );
}
