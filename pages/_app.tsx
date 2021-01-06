import type { AppProps } from "next/app";
import Head from "next/head";
import "react-notion/src/styles.css";

import { useThemeDetector } from "../hooks";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useThemeDetector();

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/LibreCaslonText-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Wotfard-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Wotfard-RegularItalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Wotfard-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
