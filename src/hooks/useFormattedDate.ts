import { useEffect, useState } from "react"
// instead of JS Date API I would use date-fns or dayjs
export function useFormattedDate(date: Date) {
  const [formattedDate, setFormattedDate] = useState("")
  useEffect(() => setFormattedDate(new Date(date).toLocaleDateString()), [date])

  return formattedDate
}

