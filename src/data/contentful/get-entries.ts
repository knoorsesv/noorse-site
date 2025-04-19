import { contentfulClient } from '../../lib/contentful'
import type { Attachment } from '../../react/types/attachment'
import type { ContentfulPage } from './types'

export const getPage = async (title: string) => {
  const page = (
    await contentfulClient.withoutUnresolvableLinks.getEntries<ContentfulPage>({
      'fields.title': title,
      content_type: 'page',
    })
  ).items[0]

  return {
    title: page.fields.title,
    body: page.fields.body,
    attachment: page.fields.attachment
      .map((asset) => {
        const fields = asset?.fields
        if (!fields) return null
        if (!fields.file) return null

        return {
          title: fields?.title,
          file: {
            url: fields.file.url,
            fileName: fields.file.fileName,
            contentType: fields.file.contentType,
          },
        } satisfies Attachment
      })
      .filter((asset) => !!asset),
  }
}
