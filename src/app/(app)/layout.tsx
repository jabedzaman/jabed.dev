import { Link } from "next-view-transitions";
import * as React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col justify-between pt-0 md:pt-6 p-6">
      <section className="max-w-[60ch] mx-auto w-full space-y-6">
        <Link href={"/"} className="font-medium py-5">
          Jabed Zaman
        </Link>
        {children}
      </section>
    </main>
  );
}
