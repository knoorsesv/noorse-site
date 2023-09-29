import React from 'react'
import { getSiteMapForInfoPages } from '../queries/pages.js'
import { getSponsors } from '../queries/sponsors.js'
import { getVersion } from '../queries/version.js'
import { Layout as LayoutPage } from '../components/pages'

const Layout = ({ children }) => {
  return (
    <LayoutPage
      sitemap={getSiteMapForInfoPages()}
      sponsors={getSponsors()}
      version={getVersion()}
    >
      {children}
    </LayoutPage>
  )
}

export default Layout
