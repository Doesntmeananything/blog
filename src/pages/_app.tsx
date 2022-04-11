import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import SEO from "../../next-seo.config";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.info(String.raw`  ________  _____ ______   ________     
 |\   ___ \|\   _ \  _   \|\   __  \    
 \ \  \_|\ \ \  \\\__\ \  \ \  \|\  \   
  \ \  \ \\ \ \  \\|__| \  \ \   __  \  
   \ \  \_\\ \ \  \    \ \  \ \  \ \  \ 
    \ \_______\ \__\    \ \__\ \__\ \__\
     \|_______|\|__|     \|__|\|__|\|__|                                        
 `);
  }, []);

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
