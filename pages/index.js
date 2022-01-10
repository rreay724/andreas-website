import Head from "next/head";
import { Header, Profile } from "../components/index";

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
        <Profile />
      </main>
    </div>
  );
}
