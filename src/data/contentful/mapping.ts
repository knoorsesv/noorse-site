import type { EntrySkeletonType, EntrySys, ResolvedField } from 'contentful'
import type { BestuursLid } from '../../react/types/bestuur'
import type { ContentfulBestuursLid, ContentfulNewsItem } from './types'
import type { NewsItem } from '../../react/types/news'

export type Mapper<ContentfulType extends EntrySkeletonType, ReturnType> = (
  fields: {
    [FieldName in keyof ContentfulType['fields']]: ResolvedField<
      ContentfulType['fields'][FieldName],
      'WITHOUT_UNRESOLVABLE_LINKS',
      'default'
    >
  },
  sys: EntrySys
) => ReturnType

export const mapBestuursLid: Mapper<ContentfulBestuursLid, BestuursLid> = (
  fields
) => {
  return {
    type: fields.type,
    title: fields.title,
    naam: fields.naam,
    email: fields.email,
  }
}

export const mapNewsItem: Mapper<ContentfulNewsItem, NewsItem> = (
  fields,
  sys
) => ({
  title: fields.title,
  inhoud: fields.inhoud,
  blurb: fields.blurb,
  publishDate: fields.publishDate ? new Date(fields.publishDate) : undefined,
  createdAt: new Date(sys.createdAt),
  showImageOnPage: fields.showImageOnPage,

  categoryName: fields.category?.fields.naam || '',
  image: {
    responsiveURL:
      fields.image?.fields.file?.url &&
      `${fields.image?.fields.file?.url.replace('//', 'https://')}?w=300&h=200&fm=jpg&fl=progressive`,
  },
  attachment: fields.attachment
    ?.filter((asset) => !!asset)
    .map((asset) => ({
      title: asset.fields.title,
      file: asset.fields.file && {
        contentType: asset.fields.file.contentType,
        fileName: asset.fields.file.fileName,
        url: asset.fields.file.url,
      },
    })),
})
