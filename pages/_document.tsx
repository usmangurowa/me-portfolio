import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="description" content="Usman Hassan's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="text-gray-900 transition-colors duration-300 ease-in-out bg-white dark:bg-gray-950 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
