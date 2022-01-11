import Head from "next/head";
import { Header, Main, Footer } from "../components/index";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Andrea Rodriguez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50 ">
        <Header />
      </header>
      <Main />
      <Footer />
    </div>
  );
}
