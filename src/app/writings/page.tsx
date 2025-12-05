import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";
import { getWritings } from "~/lib/writings";

export const metadata: Metadata = {
  title: "writings",
  description:
    "journals and articles by jabed zaman on programming, web development, and more.",
};

const bentoPattern = [
  "large",
  "normal",
  "normal",
  "normal",
  "large",
  "normal",
  "normal",
  "normal",
  "large",
];

export default function Page() {
  const writings = getWritings();
  return (
    <main className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-serif">writing.</h1>
        <p className="max-w-2xl">
          I journal my thoughts and share my knowledge through these writings.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {writings
          .sort(
            (a, b) =>
              new Date(b.metadata.date).getTime() -
              new Date(a.metadata.date).getTime()
          )
          .map((writing, index) => {
            const pattern = bentoPattern[index % bentoPattern.length];
            const isLarge = pattern === "large";
            return (
              <Link
                key={writing.slug}
                href={`/writings/${writing.slug}`}
                className={`group h-64 block p-4 border border-border -ml-px -mt-px hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                <div className="space-y-4 flex flex-col h-full">
                  <div className="flex flex-1 h-full items-start gap-2 text-xs">
                    <span>Writing</span>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-xl md:text-2xl font-serif leading-tight text-neutral-900 dark:text-neutral-100">
                      {writing.metadata.title}
                    </h2>
                    <p className="text-xs leading-relaxed">
                      {moment(writing.metadata.date).format("MMMM D, YYYY")}
                    </p>
                    <p className="text-sm leading-relaxed line-clamp-3">
                      {writing.metadata.summary}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
