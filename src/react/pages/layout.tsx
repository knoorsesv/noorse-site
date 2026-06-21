import type { FC, PropsWithChildren } from 'react'
import { Footer, Navbar } from '../index.ts'
import type { SiteMap } from '../types/sitemap'
import type { Sponsor } from '../types/sponsor'

export const Layout: FC<
  PropsWithChildren<{
    sponsors: Sponsor[]
    sitemap: SiteMap
    currentURL: string
  }>
> = ({ children, sponsors, sitemap, currentURL }) => {
  return (
    <div id="page-wrapper" className={'flex flex-col'}>
      <Navbar siteMap={sitemap} currentURL={currentURL} />
      {/* todo: should this be a main tag? */}
      <div id="content" className={'relative flex min-h-[75vh] justify-center'}>
        {children}
      </div>
      <Footer sponsors={sponsors} />
    </div>
  )
}
