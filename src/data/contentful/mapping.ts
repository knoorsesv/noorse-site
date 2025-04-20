import type { EntrySkeletonType, ResolvedField } from 'contentful'
import type { BestuursLid } from '../../react/types/bestuur'
import type { ContentfulBestuursLid } from './types'

export type Mapper<
  ContentfulType extends EntrySkeletonType,
  ReturnType,
> = (fields: {
  [FieldName in keyof ContentfulType['fields']]: ResolvedField<
    ContentfulType['fields'][FieldName],
    'WITHOUT_UNRESOLVABLE_LINKS',
    'default'
  >
}) => ReturnType

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
