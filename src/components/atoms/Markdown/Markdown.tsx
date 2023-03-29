import MarkdownToJsx from "markdown-to-jsx"
import { MarkdownProps } from "./Markdown.types"

export function Markdown({ children, ...rest }: MarkdownProps) {
  return <MarkdownToJsx {...rest}>{children.replace(/\n/g, "<br/>")}</MarkdownToJsx>
}

