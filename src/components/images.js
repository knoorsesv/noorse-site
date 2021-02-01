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

  return (
    <Link
      to={'/'}
      className={`${className} h-full w-full max-w-full max-h-full flex flex-col items-center`}
    >
      <Img
        id="logo"
        fluid={images.logo.childImageSharp.fluid}
        alt={'Noorse Logo'}
        fadeIn={process.env.PROD === 'true'}
        imgStyle={{ objectFit: 'contain' }}
        style={{ height: '0px' }} // set initial value like this so the logo doesn't flash fullheight over the page before css is loaded
        className={`h-full w-full max-w-full max-h-full`}
      />
    </Link>
  )
}
