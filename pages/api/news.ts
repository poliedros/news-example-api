// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type NewsDto = {
  _id: string;
  headline: string;
  publishedAt: Date;
  by: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsDto[]>
) {
  const fetchedData = await fetch("https://api.news.czar.dev");
  const data = await fetchedData.json();

  res.status(200).json(data as NewsDto[]);
}
