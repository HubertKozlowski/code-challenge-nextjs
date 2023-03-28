interface Category {
  name: string
  slug: string
}

interface Content {
  title: string
  text: string
}

export interface EventData {
  name: string
  localization: string
  charge?: string
  date: Date
  isSignUpEnable: boolean
}

export interface Article {
  id: string
  slug: string
  createdAt: Date
  title: string
  description: string
  content: Content // in Strapi this field would be a dynamic block
  cover: string // in Strapi this field would contain object with optimized data
  categories: Category[]
  event: EventData
}
