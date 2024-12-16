import { Footer, Navbar, Seo } from '../index.js'

export const Layout = ({
  children,
  version,
  sponsors,
  sitemap,
  currentURL,
}) => {
  return (
    <div id="page-wrapper" className={'flex flex-col'}>
      {/* todo: reenable some sort of fallback social media image */}
      <Seo>{/* <meta property="og:image" content={logoUrl} /> */}</Seo>
      <Navbar siteMap={sitemap} currentURL={currentURL} />
      {/* todo: should this be a main tag? */}
      <div id="content" className={'relative flex min-h-[75vh] justify-center'}>
        {children}
      </div>
      <Footer version={version} sponsors={sponsors} />
    </div>
  )
}
