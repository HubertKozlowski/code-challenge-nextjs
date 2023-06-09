import { Article } from "@/basics/types/articles.types"
import { Chip } from "@/atoms/Chip"
import Image from "next/image"
import Link from "next/link"
import { routes } from "@/basics/constants/routing.constants"
import { useFormattedDate } from "@/hooks/useFormattedDate"
import styles from "./ArticleCard.module.sass"

type ArticleCardProps = Article

export function ArticleCard({ slug, createdAt, title, description, cover, categories }: ArticleCardProps) {
  const createdAtDate = useFormattedDate(createdAt)

  return (
    <Link href={`${routes.articles.path}/${slug}`} className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={cover} alt="article cover" priority width={440} height={240} className={styles.cover} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.chips_section}>
        <div className={styles.tags}>
          {categories.map((category) => (
            <Chip key={category.slug} text={category.name} />
          ))}
        </div>
        <Chip text={createdAtDate} />
      </div>
      <p>{description}</p>
    </Link>
  )
}
