import '../styles/globals.scss';
import '../styles/components/button.scss';
import type { AppProps } from 'next/app';
import Layout from "../components/Layout";
import '@fortawesome/fontawesome-free/css/all.css';
import ReactGA from "react-ga";
import { useEffect } from "react";
import isBrowser from "../helper/isBrowser";
import { GOOGLE_ANALYTICS_CODE } from "../data/constants";

ReactGA.initialize(GOOGLE_ANALYTICS_CODE);

function MyApp({ Component, pageProps }: AppProps) {
  const urlPath = isBrowser() && window.location.pathname;

  useEffect(() => {
    ReactGA.pageview(urlPath || "/");
  }, [urlPath]);

  return (
    <>
      <Layout setMinHeightOfScreen={true}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
