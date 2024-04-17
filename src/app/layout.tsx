export { metadata } from "~/config";
import { Footer, Header } from "~/components";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0d] text-[#e7e7e7] max-w-5xl mx-auto px-2 my-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
