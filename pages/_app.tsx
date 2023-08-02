import type { AppProps } from "next/app";
import "./globals.css";
import UnderContstruction from "../components/others/underconstruction";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UnderContstruction />
      <Component {...pageProps} />
    </>
  );
}
