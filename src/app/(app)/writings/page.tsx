import moment from "moment";
import Link from "next/link";
import { getWritings } from "~/libs/utils";

export default function Page() {
  const writings = getWritings();
  return (
    <main className="space-y-6">
      <div>
        {/* fraunces font */}
        <h1 className="text-2xl">Writings</h1>
        <h2 className="text-sm text-[#666666]">
          I journal my thoughts and share my knowledge through these writings.
        </h2>
      </div>
      <div className="space-y-6">
        {writings
          .sort(
            (a, b) =>
              new Date(b.metadata.date).getTime() -
              new Date(a.metadata.date).getTime()
          )
          .map((writing) => (
            <div key={writing.slug}>
              <Link
                key={writing.slug}
                href={`/writings/${writing.slug}`}
                passHref
              >
                <h2>{writing.metadata.title}</h2>
              </Link>
              <span className="text-xs text-[#666666]">
                {moment(writing.metadata.date).format("MMMM D, YYYY")}
              </span>
            </div>
          ))}
      </div>
    </main>
  );
}
