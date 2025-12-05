import Link from "next/link";

const entries = [
  { name: "writings", href: "/writings" },
  { name: "crafts", href: "/crafts" },
  { name: "stack", href: "/stack" },
  { name: "music", href: "/music" },
];

export function Header() {
  return (
    <div className="border-b">
      <div className="max-w-6xl mx-auto md:border-x border-0 py-6 px-6 lg:border-x flex flex-row justify-between items-center">
        <Link href="/" className="font-serif">
          &gt; jabed.dev
        </Link>
        <ul className="flex gap-6">
          {entries.map((entry) => (
            <li key={entry.href} className="py-4">
              <Link href={entry.href} className="text-sm">
                {entry.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
