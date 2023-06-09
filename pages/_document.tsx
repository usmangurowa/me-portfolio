import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-gray-900 transition-colors duration-300 ease-in-out bg-white dark:bg-gray-950 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
