import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import ctl from '@netlify/classnames-template-literals'

export const CoverImage = ({ children, className }) => {
  const image = useStaticQuery(graphql`
    query {
      lucht: allContentfulAsset(filter: { title: { eq: "Noorse luchtfoto" } }) {
        nodes {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  function callLoaded() {
    if (process.env.GATSBY_BACKSTOP_READY === 'on') {
      console.log('backstopjs_ready')
    }
  }

  return (
    <Img
      id={'background-image'}
      alt={'background image'}
      fluid={image.lucht.nodes[0].fluid}
      className={ctl(`${className} absolute w-full`)}
      fadeIn={process.env.PROD === 'true'}
      imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
      onLoad={callLoaded}
    >
      {children}
    </Img>
  )
}
