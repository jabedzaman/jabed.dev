import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>hi! i am jabed</div>
      <Link href="/writings" className="underline">
        read writings
      </Link>
    </div>
  );
}
