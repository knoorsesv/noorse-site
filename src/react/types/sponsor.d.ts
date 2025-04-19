// import type { Image } from './image'

export interface Sponsor {
  naam: string
  websiteUrl: string
  // logo: Image // make this the generic image when that is no longer contenful specific
  logo: {
    responsiveURL?: string
  }
  omschrijving?: string
}
