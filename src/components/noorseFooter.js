import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ExternalLink } from './text'
import Img from 'gatsby-image'
import LazyLoad from 'react-lazyload'
import { Title } from './titles'
import { Logo } from './images'
import { DisclaimerPopup } from './disclaimer'
import { ContactInfo } from './contact'

const SponsorWithLogo = (sponsorNode, logoWidth = 'w-1/2') => {
  return (
    <LazyLoad once={true} key={sponsorNode.naam}>
      <div className={`max-w-logo p-2 ${logoWidth}`}>
        <ExternalLink url={sponsorNode.websiteUrl} styled={false} icon={false}>
          <Img
            fluid={sponsorNode.logo.localFile.childImageSharp.fluid}
            alt={'logo'}
            imgStyle={{ objectFit: 'scale-down' }}
          />
        </ExternalLink>
      </div>
    </LazyLoad>
  )
}

export const SponsorList = ({ logoWidth }) => {
  const sponsors = useStaticQuery(graphql`
    query {
      allContentfulSponsor {
        nodes {
          naam
          websiteUrl
          logo {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div
      className={
        'flex flex-row flex-wrap content-between justify-center items-center w-full'
      }
    >
      {sponsors.allContentfulSponsor.nodes.map((sponsor) =>
        SponsorWithLogo(sponsor, logoWidth)
      )}
    </div>
  )
}

const NoorseFooter = () => {
  return (
    <footer id="footer">
      <ContactAndSponsorFooter />
      <CopyRightFooter />
    </footer>
  )
}

export const ContactAndSponsorFooter = () => {
  return (
    <React.Fragment>
      <div
        className={
          'flex flex-col items-center ' +
          'md:flex md:flex-row md:align-center md:justify-between ' +
          'pt-12 pb-6 md:px-6 lg:px-20 xl:px-64 ' +
          'bg-green bg-opacity-75 '
        }
      >
        <Title>K. Noorse S.V.</Title>
        <Logo className={`w-1/4 pb-12 lg:p-6 lg:w-48`} />
        <div
          className={`flex flex-col items-center md:hidden
         bg-gray-light
         w-screen py-4 md:w-2/3 lg:w-1/2`}
        >
          <SponsorList />
        </div>
        <div
          className={
            'flex flex-col items-center text-center pt-8 md:p-0 md:ml-4'
          }
        >
          <ContactInfo />
        </div>
      </div>
      <div className={'hidden md:block bg-gray-light w-full'}>
        <SponsorList logoWidth={'md:w-32 lg:w-40'} />
      </div>
    </React.Fragment>
  )
}

export const CopyRightFooter = () => {
  return (
    <div
      className={
        'flex flex-col justify-start items-center bg-green-dark bg-opacity-75 py-3'
      }
    >
      <DisclaimerPopup showOnPageLoad={false} fixed={false} />
      <div size={'small'}>© {new Date().getFullYear()}, K. Noorse S.V.</div>
      <div size={'small'}>
        Powered by{' '}
        <ExternalLink url="https://www.gatsbyjs.org">Gatsby</ExternalLink>
      </div>
    </div>
  )
}

export default NoorseFooter
