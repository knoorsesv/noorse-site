import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    sportVlaanderen: allContentfulAsset(
      filter: { title: { eq: "Sport Vlaanderen Logo" } }
    ) {
      nodes {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

export const getSportVlaanderenLogo = () => {
  const image = useStaticQuery(query)
  return image.sportVlaanderen.nodes[0].gatsbyImageData
}
