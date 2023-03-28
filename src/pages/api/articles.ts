import { ARTICLES_MOCK } from "@/basics/mocks/articles.mock"
import { Article } from "@/basics/types/articles.types"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse<Article[]>) {
  res.status(200).json(ARTICLES_MOCK)
}
