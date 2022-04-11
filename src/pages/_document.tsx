import { Head, Html, Main, NextScript } from "next/document";

const secretMessage = `
figlet("DMA", '3D-ASCII', (err, art) => err ? console.error('error loading ascii: ' + err) : console.log(art));
`;

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
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/figlet@1.5.0/lib/figlet.min.js"
          type="text/javascript"
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
