import { Helmet } from 'react-helmet'
import config from '../env/config'
import type { FC, PropsWithChildren } from 'react'

export const Seo: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  const metaDescription =
    'Al het laatste nieuws over voetbalvereniging Noorse uit Kapellen.'

  return (
    <Helmet titleTemplate={`%s | K. Noorse S.V.`}>
      <html lang="nl" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {config.enableAnalytics && (
        <script
          defer
          data-domain="noorse.be"
          src="https://plausible.io/js/script.js"
        ></script>
      )}

      <link
        rel="preconnect"
        href="https://images.ctfassets.net"
        // crossOrigin="true"
      />
      {children}
    </Helmet>
  )
}
