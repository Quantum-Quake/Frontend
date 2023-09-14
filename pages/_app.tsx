import "@/styles/globals.css";
import localfont from "next/font/local";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";

import RootLayout from "@/components/layout/layout";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <RootLayout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </RootLayout>
    </NextUIProvider>
  );
}
