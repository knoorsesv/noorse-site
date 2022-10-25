import { graphql, useStaticQuery } from 'gatsby'

export const getSponsors = () => {
  const sponsors = useStaticQuery(graphql`
    {
      allContentfulSponsor {
        nodes {
          naam
          websiteUrl
          logo {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `)
  return sponsors.allContentfulSponsor.nodes
}
