import "../styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "@/components/providers";
import Navbar from "@/components/shared/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Navbar />
      <Component {...pageProps} />
    </Providers>
  );
}
