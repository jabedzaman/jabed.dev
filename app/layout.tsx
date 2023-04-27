import { siteConfig } from "@/consts";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | " + siteConfig.title,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    url: siteConfig.openGraph.url,
    siteName: siteConfig.openGraph.site_name,
    locale: siteConfig.openGraph.locale,
    type: "profile",
  },
  twitter: {
    title: siteConfig.twitter.title,
    creator: siteConfig.twitter.creator,
  },
  robots: "index, follow",
  icons: {
    shortcut: "/favicon.ico",
  },
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${prompt.className} px-2 py-3 bg-neutral-900 text-gray-100`}
        >
          <main className="max-w-2xl mx-auto">
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </Providers>
    </html>
  );
}
