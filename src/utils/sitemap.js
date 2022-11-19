import { siteMap, webshopLink } from '../env/constants'

export const mergeSiteMap = (infoPageSiteMaps) => {
  siteMap.items.find((item) => item.name === 'Club').subItems = [
    ...infoPageSiteMaps,
    {
      name: 'Webshop',
      extLink: webshopLink,
    },
  ].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

  siteMap.items.find((item) => item.name === 'Meisjes').subItems = [
    {
      name: 'Ploegen',
      link: '/meisjes',
    },
    {
      name: 'Soccer Academy',
      link: '/meisjes/soccer-academy',
    },
    {
      name: 'Info',
      link: '/meisjes/info',
    },
  ].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
  return siteMap
}
