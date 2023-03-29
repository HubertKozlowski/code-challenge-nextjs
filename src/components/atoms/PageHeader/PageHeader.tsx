import styles from "./PageHeader.module.sass"

export interface PageHeaderProps {
  text: string
}

export function PageHeader({ text }: PageHeaderProps) {
  return <h2 className={styles.header}>{text}</h2>
}
