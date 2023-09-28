import React from 'react'
import { Seo, Footer, Navbar } from '../index.js'
import { mergeSiteMap } from '../../utils/sitemap.js'

export const Layout = ({
  children,
  version,
  sponsors,
  logoUrl,
  sitemap,
  Link,
}) => {
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

  return (
    <div id="page-wrapper" className={'flex flex-col'}>
      <Seo>
        <meta property="og:image" content={logoUrl} />
      </Seo>
      <Navbar siteMap={mergeSiteMap(sitemap)} InfoPageLink={InfoPageLink} />
      {/* todo: should this be a main tag? */}
      <div id="content" className={'relative flex min-h-[75vh] justify-center'}>
        {children}
      </div>
      <Footer version={version} sponsors={sponsors} />
    </div>
  )
}
