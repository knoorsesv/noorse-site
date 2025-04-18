import type { Category } from './category'
import type { Image } from './image'

export interface NewsItem {
  title: string
  image: Image
  blurb?: string
  inhoud: string
  publishDate?: string
  createdAt: string
  srcSet?: string
  category: Category
  attachment?: Attachment[]
  showImageOnPage?: boolean
}
