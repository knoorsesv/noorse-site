// todo: this seems like a contentful specific type, make it generic

export interface Image {
  height: number
  width: number
  images: { fallback: { src: string } }
  responsiveURL?: string
  fields?: { file: { url: string } }
  file?: { url: string }
}
