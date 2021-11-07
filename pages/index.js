import Head from "next/head";
import MainSearch from "../components/MainSearch";

export default function Home() {
  return (
    <>
      <Head>
        <title>MedBazar</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300&family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <MainSearch />
    </>
  );
}
