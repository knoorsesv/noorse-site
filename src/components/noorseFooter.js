import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from './text'
import Img from 'gatsby-image'
import LazyLoad from 'react-lazyload'
import { Title } from './titles'
import { Logo } from './images'

const SponsorWithLogo = (sponsorNode, logoWidth = 'w-1/2') => {
  return (
    <LazyLoad once={true} key={sponsorNode.naam}>
      <div className={`max-w-logo p-2 ${logoWidth}`}>
        <ExternalLink url={sponsorNode.websiteUrl} styled={false}>
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
        <Logo className={`w-1/4 pb-12 lg:p-6 lg:w-64`} />
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
          <ContactBlock />
        </div>
      </div>
      <div className={'hidden md:block bg-gray-light w-full'}>
        <SponsorList logoWidth={'md:w-32 lg:w-48'} />
      </div>
    </React.Fragment>
  )
}

export const ContactBlock = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <span>Frans de Peuterstraat</span>
      <span>03/543.xx.xx</span>
      <span>info@noorse.be</span>
      <div className={'flex flex-row items-center mt-6 space-x-3'}>
        <ExternalLink url="https://www.facebook.com/noorsesv/" styled={false}>
          <FontAwesomeIcon size="2x" icon={faFacebook} />
        </ExternalLink>
        {/*<ExternalLink*/}
        {/*  url="https://github.com/gvdp/noorse-site"*/}
        {/*  styled={false}*/}
        {/*>*/}
        {/*  <FontAwesomeIcon size="2x" icon={faGithub} />*/}
        {/*</ExternalLink>*/}
      </div>
    </div>
  )
}

export const CopyRightFooter = () => {
  return (
    <div
      className={
        'flex flex-col justify-start items-center bg-green-dark bg-opacity-75 py-3'
      }
    >
      <div size={'small'}>© {new Date().getFullYear()}, K. Noorse S.V.</div>
      <div size={'small'}>
        Powered by{' '}
        <ExternalLink url="https://www.gatsbyjs.org">Gatsby</ExternalLink>
      </div>
    </div>
  )
}

export default NoorseFooter
