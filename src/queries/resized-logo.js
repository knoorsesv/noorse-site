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

// todo: deprecate this, just use the Cloudinary Logo component
export const getLogoUrl = () => {
  const { logo } = useStaticQuery(query)
  return logo.childImageSharp.resize.src
}
