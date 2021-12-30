/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../images/Logo_highres.png'
import { graphql, useStaticQuery } from 'gatsby'

function Seo({ title }) {
  const { site, logo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        logo: file(name: { eq: "Logo_highres" }) {
          publicURL
          childImageSharp {
            resize(height: 600, width: 1200, fit: CONTAIN) {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const logoSrc = logo.childImageSharp.resize.src
  const enableAnalytics = process.env.GATSBY_ENABLE_ANALYTICS === 'true'
  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="nl" />
      <title>{title}</title>
      <link rel="icon" href={favicon} />
      
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={logoSrc} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {enableAnalytics
      && (<script defer data-domain="noorse.be" src="https://plausible.io/js/plausible.js"></script>)
      }

      <link
        rel="preconnect"
        href="https://images.ctfassets.net"
        crossOrigin="true"
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="true"
      />
      <link
        rel="preconnect"
        href="https://www.google-analytics.com"
        crossOrigin="true"
      />
    </Helmet>
  )
}

export default Seo
