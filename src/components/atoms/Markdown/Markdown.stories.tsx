import { Markdown } from "./Markdown"

export default {
  title: "Atoms/Markdown",
  component: Markdown
}

const markdown = `# Test

This component is markdown

and I love pancakes`

export const BasicMarkdown = () => {
  return <Markdown>{markdown}</Markdown>
}

