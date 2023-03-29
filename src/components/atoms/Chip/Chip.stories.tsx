import { ComponentMeta } from "@storybook/react"
import { Chip, ChipProps } from "./Chip"

export default {
  title: "Atoms/Chip",
  component: Chip
} as ComponentMeta<typeof Chip>

export const BasicChip = (args: ChipProps) => {
  return <Chip {...args} />
}

BasicChip.args = {
  text: "Basic chip"
}
