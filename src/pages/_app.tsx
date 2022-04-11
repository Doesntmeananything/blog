import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import SEO from "../../next-seo.config";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
