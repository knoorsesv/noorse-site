import type { Sponsor } from '../types/sponsor'
import type { Factory } from './factory'
import { imageFactory } from './image-factory'

export const sponsorFactory: Factory<Sponsor> = (attrs) => ({
  naam: 'Sponsor',
  websiteUrl: 'www.google.be',
  logo: imageFactory(),
  ...attrs,
})

export const sponsorList = [
  sponsorFactory(),
  sponsorFactory({ naam: 'Sponsor 2' }),
  sponsorFactory({ naam: 'Sponsor 3' }),
]
