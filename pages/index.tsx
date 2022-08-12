import type { NextPage } from "next";
import useSWR from "swr";
import { NewsDto } from "./api/news";
import Head from "next/head";

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR<NewsDto[]>("/api/news", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const newsList = data.map(({ headline, by, publishedAt }) => {
    return (
      <li key={headline}>
        <div>
          <p>{headline}</p>
          <div>By: {by}</div>
          <div>Published at: {new Date(publishedAt).toUTCString()}</div>
          <hr />
        </div>
      </li>
    );
  });

  return (
    <div className="container mx-auto">
      <Head>
        <title>Czar News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Czar News
      </h1>
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-black-600">
        This is a news example page built by{" "}
        <a href="https://czar.dev">Czar+</a>
      </h2>
      <div className="container">
        <ul className="space-y-4">{newsList}</ul>
      </div>
    </div>
  );
};

export default Home;
