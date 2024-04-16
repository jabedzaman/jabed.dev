export { metadata } from "~/config";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#111111] text-[#e7e7e7] max-w-6xl mx-auto px-2">{children}</body>
    </html>
  );
}
