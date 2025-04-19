import type { SiteMap, SiteMapItem } from '../types/sitemap'
import type { Factory } from './factory'

const siteMapItemFactory: Factory<SiteMapItem> = (args) => ({
  name: 'Home',
  ...args,
})

export const siteMapFactory: Factory<SiteMap> = () => ({
  items: [
    siteMapItemFactory({ name: 'Home', link: '/' }),
    siteMapItemFactory({
      name: 'Club',
      subItems: [
        siteMapItemFactory({
          name: 'Webshop',
          extLink: '/webshop',
        }),
        siteMapItemFactory({
          name: 'Bestuur',
          link: '/bestuur',
        }),
      ],
    }),
    siteMapItemFactory({ name: 'Senioren', link: '/senioren' }),
  ],
})
