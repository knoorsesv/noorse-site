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
    <Link to={'/'} className={`${className} flex flex-col items-center`}>
      <Img
        fluid={images.logo.childImageSharp.fluid}
        alt={'Noorse Logo'}
        imgStyle={{ objectFit: 'contain' }}
        className={`h-full w-full max-w-full max-h-full`}
      />
    </Link>
  )
}
