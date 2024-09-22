import { ViewTransitions } from "next-view-transitions";
import { Montserrat } from "next/font/google";
import "./globals.css";
export { metadata } from "@/config";

export const monte = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${monte.className} [scrollbar-gutter:stable]`}
      >
        <body className="antialiased tracking-tight">{children}</body>
      </html>
    </ViewTransitions>
  );
}
