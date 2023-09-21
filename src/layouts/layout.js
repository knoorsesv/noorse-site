import { Link } from 'gatsby'
import React from 'react'
import { getSiteMapForInfoPages } from '../queries/pages.js'
import { getLogoUrl } from '../queries/resized-logo.js'
import { getSponsors } from '../queries/sponsors.js'
import { getVersion } from '../queries/version.js'
import { Logo } from '../static-images/logo.jsx'
import { Layout as LayoutPage } from '../components/pages'

const Layout = ({ children }) => {
  return (
    <LayoutPage
      Link={Link}
      Logo={Logo}
      logoUrl={getLogoUrl()}
      sitemap={getSiteMapForInfoPages()}
      sponsors={getSponsors()}
      version={getVersion()}
    >
      {children}
    </LayoutPage>
  )
}

export default Layout
