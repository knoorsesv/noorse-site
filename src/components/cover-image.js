import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ctl from '@netlify/classnames-template-literals'
import { coverSectionHeight } from './navbar'

export const CoverImage = ({ children }) => {
  const image = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { title: { eq: "Noorse luchtfoto" } }) {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH)
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
    <GatsbyImage
      image={image.allContentfulAsset.nodes[0].gatsbyImageData}
      id={'background-image'}
      alt={'Luchtfoto Noorse velden'}
      loading={'eager'}
      className={ctl(`${coverSectionHeight} absolute w-full`)}
      objectFit="cover"
      objectPosition="center"
      onLoad={callLoaded}
    >
      {children}
    </GatsbyImage>
  )
}
