import type { AppProps } from "next/app";
import "./globals.css";
import UnderContstruction from "../components/others/underconstruction";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog @musiur</title>
        <meta property="og:title" content="Blog @musiur" key="title" />
      </Head>
      <UnderContstruction />
      <Component {...pageProps} />
    </>
  );
}
