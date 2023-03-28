import { EventData } from "@/basics/types/articles.types"
import { useFormattedDate } from "@/hooks/useFormattedDate"
import { useFormattedTime } from "@/hooks/useFormattedTime"
import styles from "./ArticlePreviewEvent.module.sass"

type ArticlePreviewEventProps = EventData

export function ArticlePreviewEvent({ name, localization, charge, date, isSignUpEnable }: ArticlePreviewEventProps) {
  const createdAtDate = useFormattedDate(date)
  const createdAtTime = useFormattedTime(date)

  return (
    <>
      <p>
        {name}, {localization}
      </p>
      <p>{charge ?? "Free"}</p>
      <p>{createdAtTime}</p>
      <p>{createdAtDate}</p>
      <button type="button" disabled={!isSignUpEnable}>
        Sign up to this event
      </button>
    </>
  )
}

