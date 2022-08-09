import type { NextPage } from "next";
import useSWR from "swr";
import { NewsDto } from "./api/news";

const Home: NextPage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR<NewsDto[]>("/api/news", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const newsList = data.map((newDto) => {
    return (
      <li key={newDto.headline}>
        <p>{newDto.headline}</p>
        <div>
          By: {newDto.by} Published at: {newDto.publishedAt}
        </div>
        <hr />
      </li>
    );
  });

  return (
    <div className="container mx-auto flex">
      <ul className="space-y-4">{newsList}</ul>
    </div>
  );
};

export default Home;
