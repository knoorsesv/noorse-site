import React from 'react'
import { newsletterLink, webshopLink } from '../env/constants'
import { getFutureEvents } from '../queries/events'
import { getNewsItems } from '../queries/news'
import { getSiteMapForInfoPages } from '../queries/pages'
import { getSponsors } from '../queries/sponsors'
import { getVersion } from '../queries/version'
import { mergeSiteMap } from '../utils/sitemap'
import { HomePage } from '../components/pages'

const Home = () => {
  const siteMap = mergeSiteMap(getSiteMapForInfoPages())
  const events = getFutureEvents()
  const links = { newsletterLink, webshopLink }
  const newsItems = getNewsItems(3)
  const version = getVersion()
  const sponsors = getSponsors()
  return (
    <HomePage
      siteMap={siteMap}
      events={events}
      links={links}
      newsItems={newsItems}
      version={version}
      sponsors={sponsors}
    />
  )
}

export default Home
