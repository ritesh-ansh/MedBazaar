import { useRouter } from "next/router";
import Head from "next/head";
import App from "../components/App";

function Page() {
  const router = useRouter();
  const { page } = router.query;
  return (
    <>
      <Head>
        <title>MedBazar | {page}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300&family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <App />
    </>
  );
}

export default Page;
