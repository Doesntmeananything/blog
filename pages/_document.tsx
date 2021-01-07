import Document, { Head, Html, Main, NextScript } from "next/document";

const secretMessage = `
const inputText = "DMA";
figlet(inputText, '3D-ASCII', function(err, art) {
  if (err) {
      console.error('error loading ascii');
  }
  console.log(art);
});
`;

class MyDocument extends Document {
  render() {
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
            src="https://unpkg.com/figlet@1.5.0/lib/figlet.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: secretMessage,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
