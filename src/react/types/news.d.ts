// import type { Image } from './image'

import type { Attachment } from './attachment'

export interface NewsItem {
  title: string
  // image: Image
  image?: {
    responsiveURL?: string
  }
  blurb?: string
  inhoud: string
  publishDate?: Date
  createdAt: Date
  srcSet?: string
  categoryName: string
  attachment: Attachment[]
  showImageOnPage?: boolean
}
