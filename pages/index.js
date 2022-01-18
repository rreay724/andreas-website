import Head from "next/head";
import { Header, Main, Footer } from "../components/index";
import { useState } from "react";

import * as ga from "../lib/ga";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Andrea Rodriguez</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <header className="sticky top-0 z-50 ">
        <Header />
      </header>
      <Main />
      <Footer />
    </div>
  );
}
