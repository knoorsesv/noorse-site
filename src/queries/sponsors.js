import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

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
  // not sure if this is clean to have the gatsby image in the query here, does work nicely
  return sponsors.allContentfulSponsor.nodes.map((sponsorNode) => ({
    ...sponsorNode,
    Image: () => (
      <GatsbyImage
        image={sponsorNode.logo.gatsbyImageData}
        alt={`Logo ${sponsorNode.naam}`}
        loading="lazy"
        objectFit={'scale-down'}
      />
    ),
  }))
}
