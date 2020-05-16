import React, { useEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from './text'

const SponsorWithLogo = (sponsorNode) => {
  return (
    <div className={'max-w-logo p-2 flex items-center'} key={sponsorNode.naam}>
      <ExternalLink url={sponsorNode.websiteUrl} styled={false}>
        <img
          src={sponsorNode.logo.localFile.publicURL}
          alt={'logo'}
          className={'object-scale-down'}
        />
      </ExternalLink>
    </div>
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
      if (ref.current) {
        setInView(determineIfComponentIsInView())
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
              publicURL
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
          'flex flex-col items-center pb-12 pt-48 lg:px-40 bg-gradient-b-gray-darker md:flex md:flex-row md:items-start md:justify-between md:px-6'
        }
      >
        <div className={'flex flex-col items-center mb-12 md:w-2/3 lg:w-1/2'}>
          <FlyingIn>
            <h1 className={'title text-center'}>Sponsors</h1>
          </FlyingIn>
          <div
            className={'flex flex-row flex-wrap content-between justify-center'}
          >
            {sponsors.allContentfulSponsor.nodes.map(SponsorWithLogo)}
          </div>
        </div>
        <div className={'flex flex-col items-center md:items-end'}>
          <h1 className={'title'}>Contact</h1>
          <span>Frans de Peuterstraat</span>
          <span>03/543.xx.xx</span>
          <span>info@noorse.be</span>
          <div className={'flex flex-row items-center mt-6 space-x-3'}>
            <ExternalLink url="https://www.facebook.com/noorsesv/">
              <FontAwesomeIcon size="2x" icon={faFacebook} />
            </ExternalLink>
            <ExternalLink url="https://github.com/gvdp/noorse-site">
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </ExternalLink>
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
