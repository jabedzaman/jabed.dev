export { metadata } from "~/config";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="border-b">
          <div className="max-w-7xl mx-auto py-10 px-4 border-x">
            <Link href="/">jabed.dev</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-24 border-x">{children}</div>
        <div className="border-t">
          <div className="max-w-7xl mx-auto py-10 border-x text-sm text-center">
            &copy; {new Date().getFullYear()} jabed zaman. all rights reserved.
          </div>
        </div>
      </body>
    </html>
  );
}
