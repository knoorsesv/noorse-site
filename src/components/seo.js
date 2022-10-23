import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../images/Logo_highres.png'

function Seo({ title, children }) {
  const metaDescription =
    'Al het laatste nieuws over voetbalvereniging Noorse uit Kapellen.'
  // eslint-disable-next-line no-undef
  const enableAnalytics = process.env.GATSBY_ENABLE_ANALYTICS === 'true'
  return (
    <Helmet titleTemplate={`%s | K. Noorse S.V.`}>
      <html lang="nl" />
      <title>{title}</title>
      <link rel="icon" href={favicon} />

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {enableAnalytics && (
        <script
          defer
          data-domain="noorse.be"
          data-api="/plausible/api/event"
          src="/plausible.js"
        ></script>
      )}

      <link
        rel="preconnect"
        href="https://images.ctfassets.net"
        crossOrigin="true"
      />
      {children}
    </Helmet>
  )
}

export default Seo
