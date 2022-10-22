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

export const getVersion = () => {
  const site = useStaticQuery(query)
  return site.site.siteMetadata.version
}
