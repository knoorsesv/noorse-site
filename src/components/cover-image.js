import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const CoverImage = ({ children }) => {
  const image = useStaticQuery(graphql`
    query {
      cover: file(name: { eq: "noorse_cover" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      title={'background-image'}
      fluid={image.cover.childImageSharp.fluid}
      className={'h-full z-50'}
      style={{ backgroundPosition: 'top' }}
    >
      {children}
    </BackgroundImage>
  )
}
