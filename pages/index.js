import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import reqs from "../utils/req";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="hulu clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* navbar */}
      <Nav />
      {/* content */}
      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query?.genre;
  const result = await fetch(
    `https://api.themoviedb.org/3${reqs[genre]?.url || reqs[0].url}`
  ).then((res) => res.json());
  return {
    props: { results: result.results },
  };
}
