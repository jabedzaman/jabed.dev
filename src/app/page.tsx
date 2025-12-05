import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hi! i am jabed</h1>
      <div>
        <Link href="/writings" className="underline underline-offset-2">
          read writings
        </Link>
      </div>
      <div>
        <Link href="/stack" className="underline underline-offset-2">
          view stack
        </Link>
      </div>
    </div>
  );
}
