import { graphql, useStaticQuery } from 'gatsby'

export const getCoverImageData = () => {
  const image = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { title: { eq: "Noorse luchtfoto" } }) {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return image.allContentfulAsset.nodes[0].gatsbyImageData
}
