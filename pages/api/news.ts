// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type NewsDto = {
  headline: string;
  publishedAt: Date;
  by: string;
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
    },
    {
      headline:
        "John Travolta among stars to pay tribute to Newton-John: 'You made all of our lives so much better' - RTE.ie",
      publishedAt: new Date(),
      by: "Google News",
    },
  ]);
}
