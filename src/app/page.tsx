import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hi! i am jabed</h1>
      <Link href="/writings" className="underline underline-offset-2">
        read writings
      </Link>
    </div>
  );
}
