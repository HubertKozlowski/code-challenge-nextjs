import { Article } from "@/basics/types/articles.types"
import Image from "next/image"
import { useFormattedDate } from "@/hooks/useFormattedDate"
import styles from "./ArticlePreview.module.sass"
import { ArticlePreviewEvent } from "./ArticlePreviewEvent"

type ArticlePreviewProps = Article

export function ArticlePreview({ createdAt, title, description, cover, content, event }: ArticlePreviewProps) {
  const createdAtDate = useFormattedDate(createdAt)

  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{createdAtDate}</p>
      <div className={styles.imageWrapper}>
        <Image src={cover} alt="article cover" priority width={440} height={240} className={styles.cover} />
      </div>
      <ArticlePreviewEvent {...event} />
      <p>{content.title}</p>
      <p>{content.text}</p>
    </article>
  )
}

