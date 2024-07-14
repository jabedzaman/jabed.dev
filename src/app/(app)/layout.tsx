import * as React from "react";
import { Footer, Header } from "~/components";

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-4xl mx-auto px-2 my-10">
      <Header />
      {children}
      <Footer />
    </section>
  );
}