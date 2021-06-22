import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export const Logo = ({ className }) => {
  const images = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "Logo_highres" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <Link
      to={'/'}
      className={`${className} h-full w-full max-w-full max-h-full flex flex-col items-center`}
    >
      <GatsbyImage
        image={images.logo.childImageSharp.gatsbyImageData}
        id="logo"
        alt={'Noorse Logo'}
        fadeIn={process.env.PROD === 'true'}
        imgStyle={{ objectFit: 'contain' }}
        // set initial value like this so the logo doesn't flash fullheight over the page before css is loaded
        style={{ height: '0px' }}
        className={`h-full w-full max-w-full max-h-full`}
      />
    </Link>
  )
}
