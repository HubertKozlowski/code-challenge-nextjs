import { Article } from "@/basics/types/articles.types"

export default async function getArticleById(slug: string | string[]): Promise<Article[]> {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`)

  if (!res.ok) throw new Error("failed to fetch data")

  return res.json()
}
