import styles from "./Chip.module.sass"

interface ChipProps {
  text: string
}

export function Chip({ text }: ChipProps) {
  return <span className={styles.wrapper}>{text}</span>
}
