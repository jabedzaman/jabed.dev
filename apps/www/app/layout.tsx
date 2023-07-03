import { siteConfig } from "@/consts";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.url + "/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    images : [
      {
        url: siteConfig.url + "/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${prompt.className} p-4 bg-neutral-900 text-gray-100`}
        >
          <main className="max-w-2xl mx-auto">
            <Header />
            {children}
            <Analytics />
            <Footer />
          </main>
        </body>
      </Providers>
    </html>
  );
}
