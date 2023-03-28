import { PageHeader } from "@/atoms/PageHeader"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageHeader text="Welcome" />
    </>
  )
}
