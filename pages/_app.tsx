import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Spotify from "@/components/Spotify";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Head>
          <title>Jabed</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta
            name="description"
            content="Jabed, a full stack web developer based in India. This is his personal Portfolio Website"
          />
          <meta
            name="keywords"
            content="jabed, developer, freelancer, full-stack-developer, web-developer, technical-blogs, computer-science"
          />
          <meta name="author" content="Jabed" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Header />
        <main className="max-w-5xl mx-auto p-5">
          <Component {...pageProps} />
        </main>
        <Spotify />
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}
