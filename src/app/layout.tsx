import { ViewTransitions } from "next-view-transitions";
// import { Nunito } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
export { metadata } from "@/config";

// const nunito = Nunito({
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });

const bricolage_grotesque = Bricolage_Grotesque({
  weight: ["300", "500", "600", "700"],
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
        className={`${bricolage_grotesque.className} [scrollbar-gutter:stable]`}
      >
        <body className="antialiased tracking-tight">{children}</body>
      </html>
    </ViewTransitions>
  );
}
