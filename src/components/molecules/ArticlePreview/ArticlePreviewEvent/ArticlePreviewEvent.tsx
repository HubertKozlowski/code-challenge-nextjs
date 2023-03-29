/* eslint-disable no-console */
import { EventData } from "@/basics/types/articles.types"
import { useFormattedDate } from "@/hooks/useFormattedDate"
import { useFormattedTime } from "@/hooks/useFormattedTime"
import styles from "./ArticlePreviewEvent.module.sass"

type ArticlePreviewEventProps = EventData

export function ArticlePreviewEvent({ name, localization, charge, date, isSignUpEnable }: ArticlePreviewEventProps) {
  const createdAtDate = useFormattedDate(date)
  const createdAtTime = useFormattedTime(date)

  return (
    <div className={styles.wrapper}>
      <div>
        <span>
          {name}, {localization}
        </span>
        <div className={styles.event_details}>
          <span>{charge ?? "Free"}</span>
          <span>
            {createdAtTime} | {createdAtDate}
          </span>
        </div>
      </div>
      <button onClick={() => console.log("clicked")} className={styles.event_button} type="button" disabled={!isSignUpEnable}>
        Sign up to this event
      </button>
    </div>
  )
}

