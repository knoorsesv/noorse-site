import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
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

export const getLogoUrl = () => {
  const { logo } = useStaticQuery(query)
  return logo.childImageSharp.resize.src
}
