export { metadata } from "~/config";
import { Poppins } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${poppins.className} antialiased mx-auto w-full max-w-7xl flex-1 px-4 py-10`}
      >
        {children}
      </body>
    </html>
  );
}
