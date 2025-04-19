export interface Attachment {
  title?: string
  file?: {
    contentType: string
    fileName: string
    url: string
  }
}
