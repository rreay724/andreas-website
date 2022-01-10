import Head from "next/head";
import { Header, Main } from "../components/index";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Andrea Rodriguez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}
