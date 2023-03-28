import getAllArticles from "@/services/getAllArticles"
import Head from "next/head"
import { GetStaticProps } from "next"
import { Article } from "@/basics/types/articles.types"
import { PageHeader } from "@/atoms/PageHeader"
import { ArticleCard } from "@/molecules/ArticleCard"
import styles from "./index.module.sass"

interface ArticlesPageProps {
  articles: Article[]
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticles()

  return {
    props: { articles }
  }
}

export default function ArticlesPage({ articles }: ArticlesPageProps) {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <PageHeader text="Check our latest Posts" />
      <section className={styles.wrapper}>
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </section>
    </>
  )
}
