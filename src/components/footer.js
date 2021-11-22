import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { EmailLink, ExternalLink } from './text'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Title } from './titles'
import { Logo } from './images'
import { ContactInfo } from './contact'
import { Version } from './version'
import ctl from '@netlify/classnames-template-literals'

const SponsorWithLogo = (sponsorNode, logoWidth = 'w-1/2') => {
  return (
    <div className={`max-w-[30%] p-2 ${logoWidth}`} key={sponsorNode.naam}>
      <ConditionalWrapper
        condition={!!sponsorNode.websiteUrl}
        wrapper={(children) => (
          <ExternalLink
            url={sponsorNode.websiteUrl}
            styled={false}
            icon={false}
          >
            {children}
          </ExternalLink>
        )}
      >
        <GatsbyImage
          image={sponsorNode.logo.gatsbyImageData}
          alt={`Logo ${sponsorNode.naam}`}
          objectFit={'scale-down'}
        />
      </ConditionalWrapper>
    </div>
  )
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export const SponsorList = ({ logoWidth }) => {
  const sponsors = useStaticQuery(graphql`
    {
      allContentfulSponsor {
        nodes {
          naam
          websiteUrl
          logo {
            gatsbyImageData(layout: CONSTRAINED)
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
      title={'List of Sponsors'}
    >
      {sponsors.allContentfulSponsor.nodes.map((sponsor) =>
        SponsorWithLogo(sponsor, logoWidth)
      )}
    </div>
  )
}

export const Footer = () => {
  return (
    <footer id="footer">
      <ContactAndSponsorFooter />
      <CopyRightFooter />
    </footer>
  )
}

export const ContactAndSponsorFooter = () => {
  const wrapperClasses = ctl(`flex flex-col items-center
    medium:flex medium:flex-row medium:align-center medium:justify-between
    pt-12 pb-6 medium:px-6 large:px-32
    bg-green bg-opacity-75`)

  const sponsorListContainer = ctl(`flex flex-col items-center medium:hidden
 bg-gray-light
 w-screen py-4 medium:w-2/3 large:w-1/2`)

  const contactInfoWrapper =
    'flex flex-col items-center text-center pt-8 medium:p-0 medium:ml-4'
  return (
    <React.Fragment>
      <div className={wrapperClasses}>
        <Title>K. Noorse S.V.</Title>
        <div className={`w-1/4 pb-12 large:p-6 large:w-48`}>
          <Logo />
        </div>
        <div className={sponsorListContainer}>
          <SponsorList />
        </div>
        <div className={contactInfoWrapper}>
          <ContactInfo />
        </div>
      </div>
      <div className={'hidden medium:block bg-gray-light w-full'}>
        <SponsorList logoWidth={'medium:w-32 large:w-40'} />
      </div>
    </React.Fragment>
  )
}

export const CopyRightFooter = () => {
  const copyRightWrapper =
    'flex flex-col justify-start items-center bg-green-dark text-black bg-opacity-75 py-3'
  return (
    <div className={copyRightWrapper}>
      <div className={'small text-center px-4'}>
        Suggesties, verbeteringen? Laat het ons gerust weten op{' '}
        <EmailLink address={'website@noorse.be'} />
      </div>
      <div className={'small'}>
        <Version /> © {new Date().getFullYear()}, K. Noorse S.V.
      </div>
      <div className={'small'}>
        Powered by{' '}
        <ExternalLink textColor={'text-black'} url="https://www.gatsbyjs.org">
          Gatsby
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink textColor={'text-black'} url="https://tailwindcss.com/">
          Tailwind
        </ExternalLink>
      </div>
    </div>
  )
}
