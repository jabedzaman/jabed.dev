import Link from "next/link";
import { getCrafts } from "~/lib/crafts";

export default function Page() {
  const crafts = getCrafts();
  return (
    <main className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-serif">crafts.</h1>
        <p className="max-w-2xl">
          my indie projects, experiments, and unfinished ideas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {crafts.map((craft) => (
          <Link href={`/crafts/${craft.slug}`} key={craft.slug} className="p-4">
            <h2 className="text-2xl font-serif">
              •<span className="ml-2">{craft.metadata.title}</span>
            </h2>
            <p className="text-sm text-gray-500 ml-4">
              {craft.metadata.summary}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
