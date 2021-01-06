import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const themeDetector = `
!(function () {
  try {
    var d = document.documentElement.classList;
    d.remove("light", "dark");
    var e = localStorage.getItem("theme");
    if (!e) return localStorage.setItem("theme", "light"), d.add("light");
    if ("system" === e) {
      var t = "(prefers-color-scheme: dark)",
        m = window.matchMedia(t);
      m.media !== t || m.matches ? d.add("dark") : d.add("light");
    } else d.add(e);
  } catch (e) {}
})();
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/wotfard-semibold-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/wotfard-medium-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/wotfard-regular-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <script dangerouslySetInnerHTML={{ __html: themeDetector }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
