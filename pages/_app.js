/* eslint-disable @next/next/no-page-custom-font */
import "../styles/global.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <title>Jabed</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
