import "../styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "@/components/providers";
import Head from "next/head";
import MainLayout from "@/components/layouts/Main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Usman Hassan</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="description" content="Usman Hassan's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Providers>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Providers>
    </>
  );
}
