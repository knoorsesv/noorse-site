import { LinkWrapper } from '../../wrappers/link-wrapper.jsx'
import { Footer, Navbar, Seo } from '../index.js'
import { UpdateBanner } from '../update-banner.jsx'

export const Layout = ({ children, version, sponsors, sitemap }) => {
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
      {/* todo: reenable some sort of fallback social media image */}
      <Seo>{/* <meta property="og:image" content={logoUrl} /> */}</Seo>
      <Navbar siteMap={sitemap} InfoPageLink={InfoPageLink} />
      <UpdateBanner />
      {/* todo: should this be a main tag? */}
      <div id="content" className={'relative flex min-h-[75vh] justify-center'}>
        {children}
      </div>
      <Footer version={version} sponsors={sponsors} />
    </div>
  )
}
