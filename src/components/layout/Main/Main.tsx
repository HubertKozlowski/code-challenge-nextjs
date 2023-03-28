import React, { ReactNode } from "react"
import styles from "./Main.module.sass"

export interface MainContentProps {
  children: ReactNode
}

export function Main({ children }: MainContentProps) {
  return <main className={styles.main}>{children}</main>
}
