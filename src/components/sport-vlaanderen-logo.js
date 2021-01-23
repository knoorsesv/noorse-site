import Img from 'gatsby-image'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    sportVlaanderen: allContentfulAsset(
      filter: { title: { eq: "Sport Vlaanderen Logo" } }
    ) {
      nodes {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export const SportVlaanderen = () => {
  const image = useStaticQuery(query)

  return (
    <Img
      id="logo"
      fluid={image.sportVlaanderen.nodes[0].fluid}
      alt={'Noorse Logo'}
      fadeIn={process.env.PROD === 'true'}
      imgStyle={{ objectFit: 'contain' }}
      className={`h-full w-full max-w-full max-h-full`}
    />
  )
}
