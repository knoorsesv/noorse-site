import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const CoverImage = ({ children, className }) => {
  const image = useStaticQuery(graphql`
    query {
      cover: file(name: { eq: "noorse_cover" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  function callLoaded() {
    //todo: only call this in dev mode
    console.log('backstopjs_ready')
  }

  return (
    <Img
      id={'background-image'}
      alt={'background image'}
      fluid={image.cover.childImageSharp.fluid}
      className={`${className} absolute w-full`}
      fadeIn={process.env.PROD === 'true'}
      imgStyle={{ objectFit: 'cover', objectPosition: 'top' }}
      onLoad={callLoaded}
    >
      {children}
    </Img>
  )
}
