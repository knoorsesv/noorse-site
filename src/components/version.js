import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        version
      }
    }
  }
`

export const Version = () => {
  const site = useStaticQuery(query)
  return <span>v{site.site.siteMetadata.version}</span>
}
