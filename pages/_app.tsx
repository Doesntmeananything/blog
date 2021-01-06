import type { AppProps } from "next/app";
import "react-notion/src/styles.css";
import "@fontsource/libre-caslon-text/latin-700.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
