import MarkdownToJsx from "markdown-to-jsx"

type MarkdownToJsxProps = typeof MarkdownToJsx.defaultProps

export type MarkdownProps = MarkdownToJsxProps & {
  children: string
}
