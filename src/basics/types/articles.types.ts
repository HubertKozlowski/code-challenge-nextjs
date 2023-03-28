interface Category {
  name: string;
  slug: string;
}

interface Content {
  title: string;
  text: string;
}

export interface Article {
  id: string,
  slug: string,
  createdAt: Date;
  title: string;
  description: string;
  content: Content; // in Strapi this field would be a dynamic block
  cover: string; // in Strapi this field would contain object with optimized data
  categories: Category[];
}