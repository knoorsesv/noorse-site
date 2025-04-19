import type { EntryFieldTypes } from 'contentful'

export interface ContentfulSponsor {
  contentTypeId: 'sponsor'
  fields: {
    naam: EntryFieldTypes.Text
    websiteUrl: EntryFieldTypes.Text
    logo: EntryFieldTypes.AssetLink
  }
}

export interface ContentfulCategory {
  contentTypeId: 'categorie'
  fields: {
    naam: EntryFieldTypes.Text
  }
}

export interface ContentfulNewsItem {
  contentTypeId: 'news'
  fields: {
    title: EntryFieldTypes.Text
    inhoud: EntryFieldTypes.Text
    blurb: EntryFieldTypes.Text
    image: EntryFieldTypes.AssetLink
    category: EntryFieldTypes.EntryResourceLink<ContentfulCategory>
    showImageOnPage: EntryFieldTypes.Boolean
    publishDate: EntryFieldTypes.Text
    image: EntryFieldTypes.AssetLink
    // attachment: EntryFieldTypes.AssetLink
    attachment: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  }
}

export interface ContentfulEvent {
  contentTypeId: 'evenement'
  fields: {
    naam: EntryFieldTypes.Text
    datum: string // actually dd/MM/yy - doesnt match EntryFieldTypes.Date
    eindDatum: string // actually dd/MM/yy - doesnt match EntryFieldTypes.Date
  }
}

export interface ContentfulPage {
  contentTypeId: 'page'
  fields: {
    title: EntryFieldTypes.Text
    body: EntryFieldTypes.Text
    // todo: this should be plural since its an array
    attachment: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  }
}

export interface ContentfulTeam {
  contentTypeId: 'ploeg'
  fields: {
    naam: EntryFieldTypes.Text
    naamOpVoetbalVlaanderen: EntryFieldTypes.Text
    categorie: EntryFieldTypes.EntryResourceLink<ContentfulCategory>
    logo: EntryFieldTypes.AssetLink
  }
}

export interface ContentfulBestuursLid {
  contentTypeId: 'bestuurslid'
  fields: {
    title: EntryFieldTypes.Text
    naam: EntryFieldTypes.Text
    email: EntryFieldTypes.Text
    type: EntryFieldTypes.Text<'deelwerking' | 'bestuursorgaan'>
    body: EntryFieldTypes.RichText
    attachment: EntryFieldTypes.AssetLink
  }
}
