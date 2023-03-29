import { ARTICLES_MOCK } from "@/basics/mocks/articles.mock"
import { Article } from "@/basics/types/articles.types"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse<Article>) {
  const { slug } = req.query

  const article = ARTICLES_MOCK.find((article) => article.slug === slug)

  if (!article) throw new Error("Not found!")

  res.status(200).json(article)
}
