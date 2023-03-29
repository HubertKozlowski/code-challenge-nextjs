import { ComponentMeta } from "@storybook/react"
import { PageHeader, PageHeaderProps } from "./PageHeader"

export default {
  title: "Atoms/PageHeader",
  component: PageHeader
} as ComponentMeta<typeof PageHeader>

export const BasicPageHeader = (args: PageHeaderProps) => {
  return <PageHeader {...args} />
}

BasicPageHeader.args = {
  text: "Page Header"
}
