import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-serif">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-10">
        <Image
          src="/avatar.png"
          alt="Jabed Zaman"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div>
          <h1 className="text-4xl md:text-5xl mb-2">Jabed Zaman</h1>
          <h2 className="text-lg">software engineer, homelab freak</h2>
        </div>
      </div>
    </main>
  );
}
