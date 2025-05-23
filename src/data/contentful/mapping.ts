import type { EntrySkeletonType, EntrySys, ResolvedField } from 'contentful'
import type { BestuursLid } from '../../react/types/bestuur'
import type {
  ContentfulBestuursLid,
  ContentfulCategory,
  ContentfulEvent,
  ContentfulNewsItem,
  ContentfulSponsor,
  ContentfulTeam,
} from './types'
import type { NewsItem } from '../../react/types/news'
import type { Sponsor } from '../../react/types/sponsor'
import type { Event } from '../../react/types/event'
import type { Team } from '../../react/types/team'
import type { Category } from '../../react/types/category'

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

export const mapSponsor: Mapper<ContentfulSponsor, Sponsor> = (fields) => ({
  naam: fields.naam,
  websiteUrl: fields.websiteUrl,
  logo: {
    responsiveURL:
      fields.logo?.fields.file?.url.replace('//', 'https://') +
      '?w=300&h=200&fm=jpg&fl=progressive',
  },
})
export const mapEvent: Mapper<ContentfulEvent, Event> = (fields) => ({
  datum: fields.datum,
  eindDatum: fields.eindDatum,
  naam: fields.naam,
})

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
export const mapTeam: Mapper<ContentfulTeam, Team> = (fields) => ({
  name: fields.naam,
  bouw: fields.bouw,
  naam: fields.naam,
  coach: fields.coach,
  afgevaardigde: fields.afgevaardigde,
  training: fields.training,
  categoryName: fields.categorie?.fields.naam || '',
  ploegfoto: {
    responsiveURL:
      fields.ploegfoto?.fields.file?.url &&
      `${fields.ploegfoto?.fields.file?.url.replace('//', 'https://')}?w=300&h=200&fm=jpg&fl=progressive`,
  },
})

export const mapCategory: Mapper<ContentfulCategory, Category> = (
  fields,
  sys
) => ({
  name: fields.naam,
  general_info: fields.general_info,
  id: sys.id,
})
