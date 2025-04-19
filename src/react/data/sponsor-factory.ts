import type { Sponsor } from '../types/sponsor'
import type { Factory } from './factory'
// import { imageFactory } from './image-factory'

export const sponsorFactory: Factory<Sponsor> = (attrs) => ({
  naam: 'Sponsor',
  websiteUrl: 'www.google.be',
  logo: {
    responsiveURL: 'https://picsum.photos/320/320',
  },
  ...attrs,
})

export const sponsorList = [
  sponsorFactory(),
  sponsorFactory({ naam: 'Sponsor 2' }),
  sponsorFactory({ naam: 'Sponsor 3' }),
]
