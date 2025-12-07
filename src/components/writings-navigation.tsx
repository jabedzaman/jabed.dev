"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MDXFileData } from "~/lib/writings";

export function WritingsNavigation({ writings }: { writings: MDXFileData[] }) {
  writings.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  const currentSlug = usePathname().split("/").pop();
  const currentIndex = writings.findIndex(
    (writing) => writing.slug === currentSlug
  );
  const previous =
    currentIndex < writings.length - 1 ? writings[currentIndex + 1] : null;
  const next = currentIndex > 0 ? writings[currentIndex - 1] : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-16 flex w-full justify-between border-border border-t pt-8">
      {previous && (
        <Link
          href={`${previous.slug}`}
          className="flex w-full flex-col gap-1 text-left"
        >
          <span className="text-muted-foreground text-xs">Previous</span>
          <span className="text-sm">{previous.metadata.title}</span>
        </Link>
      )}
      {next && (
        <Link
          href={`${next.slug}`}
          className="flex w-full flex-col gap-1 text-right"
        >
          <span className="text-muted-foreground text-xs">Next</span>
          <span className="text-sm">{next.metadata.title}</span>
        </Link>
      )}
    </div>
  );
}
