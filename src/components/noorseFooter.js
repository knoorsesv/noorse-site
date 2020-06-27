import React, { useEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from './text'
import Img from 'gatsby-image'
import LazyLoad from 'react-lazyload'
import { Title } from './titles'

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

const FlyingIn = ({ children }) => {
  const ref = useRef(null)
  const [isInView, setInView] = useState(false)

  function determineIfComponentIsInView() {
    return (
      ref.current.getBoundingClientRect().top + 20 <
      (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !isInView) {
        setInView(determineIfComponentIsInView())
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isInView])

  return (
    <div
      className={`${
        isInView ? '' : '-translate-x-64'
      } transform transition duration-1000`}
      ref={ref}
    >
      {children}
    </div>
  )
}

const NoorseFooter = () => {
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
    <footer id="footer">
      <div
        className={
          'flex flex-col items-center bg-gray-light py-12 lg:px-40 md:flex md:flex-row md:items-start md:justify-between md:px-6'
        }
      >
        <div
          className={
            'flex flex-col items-center mb-12 w-screen md:w-2/3 lg:w-1/2'
          }
        >
          <FlyingIn>
            <Title>Sponsors</Title>
          </FlyingIn>
          <div
            className={
              'flex flex-row flex-wrap content-between justify-center items-center w-full'
            }
          >
            {sponsors.allContentfulSponsor.nodes.map(SponsorWithLogo)}
          </div>
        </div>
        <div className={'flex flex-col items-center md:items-end'}>
          <Title>Contact</Title>
          <span>Frans de Peuterstraat</span>
          <span>03/543.xx.xx</span>
          <span>info@noorse.be</span>
          <div className={'flex flex-row items-center mt-6 space-x-3'}>
            <ExternalLink
              url="https://www.facebook.com/noorsesv/"
              styled={false}
            >
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
      </div>
      <div
        className={
          'flex flex-col justify-start items-center bg-gray-darker py-3'
        }
      >
        <div size={'small'}>© {new Date().getFullYear()}, K. Noorse S.V.</div>
        <div size={'small'}>
          Powered by{' '}
          <ExternalLink url="https://www.gatsbyjs.org">Gatsby</ExternalLink>
        </div>
      </div>
    </footer>
  )
}

export default NoorseFooter
