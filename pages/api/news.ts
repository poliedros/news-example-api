// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type NewsDto = {
  headline: string;
  publishedAt: Date;
  by: string;
  image_url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsDto[]>
) {
  res.status(200).json([
    {
      headline:
        "Is iPhone 14 release date set to be earlier than expected? - The National",
      publishedAt: new Date(),
      by: "BBC",
      image_url:
        "https://news.google.com/__i/rss/rd/articles/CBMiZGh0dHBzOi8vd3d3LnJ0ZS5pZS9lbnRlcnRhaW5tZW50LzIwMjIvMDgwOC8xMzE0NjU0LWpvaG4tdHJhdm9sdGEtcGF5cy10cmlidXRlLXRvLW9saXZpYS1uZXd0b24tam9obi_SAQA?oc=5",
    },
    {
      headline:
        "John Travolta among stars to pay tribute to Newton-John: 'You made all of our lives so much better' - RTE.ie",
      publishedAt: new Date(),
      by: "Google News",
      image_url:
        "https://news.google.com/__i/rss/rd/articles/CBMiZGh0dHBzOi8vd3d3LnJ0ZS5pZS9lbnRlcnRhaW5tZW50LzIwMjIvMDgwOC8xMzE0NjU0LWpvaG4tdHJhdm9sdGEtcGF5cy10cmlidXRlLXRvLW9saXZpYS1uZXd0b24tam9obi_SAQA?oc=5",
    },
  ]);
}
