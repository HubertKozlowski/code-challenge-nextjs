import React, { ReactNode } from "react"
import { Main } from "./Main"
import { Header } from "./Header"

export interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}
