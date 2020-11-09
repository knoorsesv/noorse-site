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

  const callLoaded = () => {
    //todo: only call this in dev mode
    console.log('backstopjs_ready')
  }

  return (
    <BackgroundImage
      title={'background-image'}
      fluid={image.cover.childImageSharp.fluid}
      className={'h-full z-50'}
      style={{ backgroundPosition: 'top' }}
      onLoad={callLoaded}
    >
      {children}
    </BackgroundImage>
  )
}
