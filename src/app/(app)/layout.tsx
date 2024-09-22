import * as React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
      <section className="max-w-[60ch] mx-auto w-full space-y-6">
        {children}
      </section>
    </main>
  );
}
