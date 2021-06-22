import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'
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

export const SportVlaanderen = () => {
  const image = useStaticQuery(query)
  return (
    <GatsbyImage
      image={image.sportVlaanderen.nodes[0].gatsbyImageData}
      id="logo"
      alt={'Noorse Logo'}
      fadeIn={process.env.PROD === 'true'}
      imgStyle={{ objectFit: 'contain' }}
      className={`h-full w-full max-w-full max-h-full`}
    />
  )
}
