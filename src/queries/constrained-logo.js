import { graphql, useStaticQuery } from 'gatsby'

export const getConstrainedLogoData = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "Logo_highres" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, height: 200)
        }
      }
    }
  `)
  return logo.childImageSharp
}
