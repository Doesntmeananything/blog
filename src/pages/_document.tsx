import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/libre-caslon-text-latin-700-normal.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/wotfard-semibold-webfont.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/wotfard-regular-webfont.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
