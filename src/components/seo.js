/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import favicon from '../images/Logo_highres.png'
import { graphql, useStaticQuery } from 'gatsby'

function Seo({ description, lang, meta, title }) {
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

  const metaDescription = description || site.siteMetadata.description
  const logoSrc = logo.childImageSharp.resize.src

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: logoSrc,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        
        .concat(meta)}
    >
      <link rel="icon" href={favicon} />
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

Seo.defaultProps = {
	lang: `nl`,
  meta: [],
  description: ``,
  title: 'K. Noorse S.V.',
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo
