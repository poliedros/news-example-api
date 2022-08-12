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
    <div className="container mx-auto flex">
      <Head>
        <title>Czar News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul className="space-y-4">{newsList}</ul>
    </div>
  );
};

export default Home;
