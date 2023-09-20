import { Link } from 'gatsby'
import React from 'react'
import { Footer } from '../components/footer.jsx'
import { Navbar } from '../components/navbar.jsx'
import { Seo } from '../components'
import { getSiteMapForInfoPages } from '../queries/pages'
import { getLogoUrl } from '../queries/resized-logo'
import { getSponsors } from '../queries/sponsors'
import { getVersion } from '../queries/version'
import { Logo } from '../static-images/logo.jsx'
import { mergeSiteMap } from '../utils/sitemap'

const Layout = ({ children }) => {
  return (
    <div id="page-wrapper" className={'flex flex-col'}>
      <Seo>
        <meta property="og:image" content={getLogoUrl()} />
      </Seo>

      <Navbar
        siteMap={mergeSiteMap(getSiteMapForInfoPages())}
        InfoPageLink={InfoPageLink}
        Logo={Logo}
      />
      {/* todo: should this be a main tag? */}
      <div id="content" className={'relative flex min-h-[75vh] justify-center'}>
        {children}
      </div>
      <Footer version={getVersion()} Logo={Logo} sponsors={getSponsors()} />
    </div>
  )
}

const InfoPageLink = ({ item, className }) => {
  return (
    <Link
      className={className}
      activeClassName={'border-b-2 border-white'}
      to={item.link}
    >
      {item.name}
    </Link>
  )
}

export default Layout
