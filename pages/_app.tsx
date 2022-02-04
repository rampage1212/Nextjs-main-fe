import '../styles/globals.scss';
import '../styles/components/button.scss';
import type { AppProps } from 'next/app';
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/f86a40c189.js"
          crossOrigin="anonymous"
          async
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
