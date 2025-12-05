import Link from "next/link";

export function Header() {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto py-10 px-4 border-x">
        <Link href="/">jabed.dev</Link>
      </div>
    </div>
  );
}
