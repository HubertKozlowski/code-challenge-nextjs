import { Article } from "../types/articles.types"

const articleContentMarkdown = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.\n 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.
<ul>
  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.</li> 
  <li> Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat.</li> 
  <li> Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.</li> 
</ul>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.\n 
`

const articleMockGenerator = (props?: Partial<Article>): Article => ({
  id: props?.id || "1",
  slug: `${props?.slug}-${props?.id}` || "article-slug",
  createdAt: props?.createdAt || new Date(2021, 8, 16),
  title: props?.title || `Upgrading your remote business - Talk: ${props?.id}`,
  description:
    props?.description ||
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  content: props?.content || { title: "About this event", text: articleContentMarkdown },
  cover: "/article-cover.jpg",
  categories: props?.categories || [
    { name: "topic", slug: "topic" },
    { name: "user", slug: "user" }
  ],
  event: props?.event || {
    name: "Corn Exchange",
    localization: "Witney, Oxforshire",
    date: new Date(2021, 8, 16, 16, 0),
    isSignUpEnable: true
  }
})

export const ARTICLES_MOCK: Article[] = [
  ...Array(5)
    .fill(undefined)
    .map((_, index) =>
      articleMockGenerator({
        id: (index + 1).toString(),
        slug: "article-slug"
      })
    )
]
