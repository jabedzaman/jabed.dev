import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jabed Zaman",
    template: "%s | Jabed Zaman",
  },
  description:
    "Indie hacker, full-stack developer, crafting web and mobile apps.",
  category: "Personal Site",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jabed.dev",
  },
  twitter: {
    card: "summary_large_image",
  },
};
