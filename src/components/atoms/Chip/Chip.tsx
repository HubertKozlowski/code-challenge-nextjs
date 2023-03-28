import styles from './Chip.module.sass'

interface ChipProps {
  text: string;
}

export const Chip = ({text}: ChipProps) => {
  return (
      <span className={styles.wrapper}>{text}</span>
  )
}