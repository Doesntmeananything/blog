import { Head, Html, Main, NextScript } from "next/document";

const secretMessage = `
figlet("DMA", '3D-ASCII', (err, art) => err ? console.error('error loading ascii: ' + err) : console.log(art));
`;

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/libre-caslon-text-latin-700-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/wotfard-semibold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/wotfard-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/figlet@1.5.0/lib/figlet.min.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: secretMessage,
          }}
        />
      </body>
    </Html>
  );
};

export default MyDocument;
