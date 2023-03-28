import { useEffect, useState } from "react"
// instead of JS Date API I would use date-fns or dayjs
export function useFormattedTime(date: Date) {
  const [formattedTime, setFormattedTime] = useState("")
  useEffect(() => setFormattedTime(new Date(date).toLocaleTimeString()), [date])

  return formattedTime
}

