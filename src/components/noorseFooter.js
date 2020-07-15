import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from './text'
import Img from 'gatsby-image'
import LazyLoad from 'react-lazyload'
import { Title } from './titles'
import { Logo } from './images'

const SponsorWithLogo = (sponsorNode) => {
  return (
    <LazyLoad once={true} key={sponsorNode.naam}>
      <div className={'max-w-logo max-w-logo w-1/2 p-2'}>
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

export const SponsorList = () => {
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
      {sponsors.allContentfulSponsor.nodes.map(SponsorWithLogo)}
    </div>
  )
}

const NoorseFooter = () => {
  return (
    <footer id="footer">
      <div
        className={
          'flex flex-col items-center ' +
          'md:flex md:flex-row md:items-start md:justify-between ' +
          'pt-12 pb-6 lg:px-40 md:px-6 ' +
          'bg-green bg-opacity-75 '
        }
      >
        <Title>K. Noorse S.V.</Title>
        <Logo className={`w-1/4 pb-12`} />
        <div
          className={
            'flex flex-col bg-gray-light items-center w-screen md:w-2/3 lg:w-1/2'
          }
        >
          <SponsorList />
        </div>
        <div className={'flex flex-col items-center pt-8'}>
          <ContactBlock />
        </div>
      </div>
      <CopyRightFooter />
    </footer>
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
