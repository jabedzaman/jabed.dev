import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import { ThemeProvider } from "next-themes";
import Spotify from "../components/Spotify";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider defaultTheme="light">
      <SessionProvider session={session}>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
        </Script>
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
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Spotify />
        <Footer />
      </SessionProvider>
    </ThemeProvider>
  );
}
