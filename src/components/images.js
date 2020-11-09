import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export const Logo = ({ className }) => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "Logo_highres" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Link
      to={'/'}
      className={`h-full w-full max-w-full max-h-full flex flex-col items-center ${className}`}
    >
      <Img
        id="logo"
        fluid={images.logo.childImageSharp.fluid}
        alt={'Noorse Logo'}
        imgStyle={{ objectFit: 'contain' }}
        className={`h-full w-full max-w-full max-h-full`}
      />
    </Link>
  )
}

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
