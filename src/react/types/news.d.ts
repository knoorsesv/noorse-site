// import type { Image } from './image'

export interface NewsItem {
  title: string
  // image: Image
  image?: {
    responsiveURL?: string
  }
  blurb?: string
  inhoud: string
  publishDate?: string
  createdAt: string
  srcSet?: string
  categoryName: string
  attachment?: Attachment[]
  showImageOnPage?: boolean
}
