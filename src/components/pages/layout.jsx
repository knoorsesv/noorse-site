import React from 'react'
import { Seo, Footer, Navbar } from '../index.js'
import { mergeSiteMap } from '../../utils/sitemap.js'
import { LinkWrapper } from '../../wrappers/link-wrapper.jsx'

export const Layout = ({ children, version, sponsors, logoUrl, sitemap }) => {
  const InfoPageLink = ({ item, className }) => {
    return (
      <LinkWrapper
        className={className}
        // todo: reenable this when we've moved off gatsby
        // activeClassName={'border-b-2 border-white'}
        href={item.link}
      >
        {item.name}
      </LinkWrapper>
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
