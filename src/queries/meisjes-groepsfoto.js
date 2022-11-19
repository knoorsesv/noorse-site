import { graphql, useStaticQuery } from 'gatsby'

export const getGroepsFotoData = () => {
  const image = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: { title: { eq: "Noorse meisjes groepsfoto" } }
      ) {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return image.allContentfulAsset.nodes[0].gatsbyImageData
}
