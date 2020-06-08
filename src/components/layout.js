import React from 'react'

import NoorseFooter from './noorseFooter'
import { Navbar } from './navbar'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from '@gvdp/gatsby-background-image'

const Layout = ({ children, coverPhoto }) => {
  const image = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "bg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={'flex min-h-screen flex-col'}>
      <BackgroundImage
        fluid={image.bg.childImageSharp.fluid}
        className={'bg-fixed'}
        opacity={0.05}
      >
        <Navbar coverPhoto={coverPhoto} />
        <div
          id="content"
          className={
            'relative flex-1 mt-3 md:mx-3 lg:mx-6 p-3 pl-4 md:px-4 lg:px-10 mb-12'
          }
        >
          {children}
        </div>
        <NoorseFooter />
      </BackgroundImage>
    </div>
  )
}

export default Layout
