import type Author from './author'

type ArticleType = {
  slug: string
  title: string
  date: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default ArticleType
