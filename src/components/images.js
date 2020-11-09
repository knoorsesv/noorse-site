import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

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

  const callLoaded = () => {
    //todo: only call this in dev mode
    console.log('backstopjs_ready')
  }

  return (
    <Link
      to={'/'}
      className={`${className} h-full w-full max-w-full max-h-full flex flex-col items-center`}
    >
      <Img
        id="logo"
        fluid={images.logo.childImageSharp.fluid}
        alt={'Noorse Logo'}
        imgStyle={{ objectFit: 'contain' }}
        className={`h-full w-full max-w-full max-h-full`}
        onLoad={callLoaded}
      />
    </Link>
  )
}
