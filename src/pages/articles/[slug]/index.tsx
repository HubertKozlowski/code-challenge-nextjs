import { Article } from "@/basics/types/articles.types"
import { ArticlePreview } from "@/molecules/ArticlePreview"
import getAllArticles from "@/services/getAllArticles"
import getArticleById from "@/services/getArticleById"
import { GetStaticProps } from "next"
import Head from "next/head"

interface ArticlePreviewPageProps {
  article: Article
}

export async function getStaticPaths() {
  const articles = await getAllArticles()

  const paths = articles.map((article) => ({
    params: { slug: article.slug }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) throw new Error("Error!")

  const article = await getArticleById(params.slug)

  return { props: { article } }
}

export default function ArticlePreviewPage({ article }: ArticlePreviewPageProps) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <ArticlePreview {...article} />
    </>
  )
}

