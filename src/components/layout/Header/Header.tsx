import React from "react"
import Link from "next/link"
import { Logo } from "@/atoms/Logo"
import { routes } from "@/basics/constants/routing.constants"
import styles from "./Header.module.sass"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo type="core" />
        <Link className={styles.link} href={routes.home.path}>
          {routes.home.label}
        </Link>
        <Link className={styles.link} href={routes.articles.path}>
          {routes.articles.label}
        </Link>
      </div>
    </header>
  )
}
