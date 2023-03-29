import { Article } from "@/basics/types/articles.types"
import Image from "next/image"
import { useFormattedDate } from "@/hooks/useFormattedDate"
import { Markdown } from "@/atoms/Markdown"
import styles from "./ArticlePreview.module.sass"
import { ArticlePreviewEvent } from "./ArticlePreviewEvent"

type ArticlePreviewProps = Article

export function ArticlePreview({ createdAt, title, description, cover, content, event }: ArticlePreviewProps) {
  const createdAtDate = useFormattedDate(createdAt)

  return (
    <article>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.createdAt}>{createdAtDate}</div>
      <div className={styles.coverWrapper}>
        <div>
          <Image src={cover} alt="article cover" priority width={1020} height={500} />
          <ArticlePreviewEvent {...event} />
        </div>
      </div>
      <div className={styles.article}>
        <p className={styles.article_title}>{content.title}</p>
        <Markdown>{content.text}</Markdown>
      </div>
    </article>
  )
}

