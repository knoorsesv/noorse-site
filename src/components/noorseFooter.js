import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const SponsorWithLogo = (sponsorNode) => {
  return (
    <div className={'card p-3 max-w-1/3'}>
      <div className={'card-image'}>
        <figure className={'image'}>
          <img src={sponsorNode.logo.localFile.publicURL} alt={'logo'} />
        </figure>
      </div>
      <div className={'card-content text-center'}>{sponsorNode.naam}</div>
    </div>
  )
}

const NoorseFooter = () => {
  const sponsors = useStaticQuery(graphql`
    query {
      allContentfulSponsor {
        nodes {
          naam
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
    <footer className={''}>
      <div
        className={
          'grid grid-cols-5 pb-12 pt-12 px-6 bg-gray shadow-lg shadow-inner'
        }
      >
        <div className={'col-start-1 col-end-3 flex flex-col'}>
          <h1 className={'title'}>Sponsors</h1>
          <div>{sponsors.allContentfulSponsor.nodes.map(SponsorWithLogo)}</div>
        </div>
        <div
          className={'col-start-3 col-end-6 flex items-start justify-between'}
        >
          <div>Sitemap?</div>
          <div className="is-divider-vertical"></div>
          <div className={'flex content-end flex-col content-end'}>
            <h1 className={'title self-end'}>Contact</h1>
            <span className={'self-end'}>Frans de Peuterstraat</span>
            <span className={'self-end'}>03/543.xx.xx</span>
          </div>
        </div>
      </div>
      <div className={'flex flex-row justify-between bg-gray-darker p-2'}>
        <div className={'flex flex-col justify-start items-start ml-4'}>
          <div size={'small'}>© {new Date().getFullYear()}, K. Noorse S.V.</div>
          <div size={'small'}>
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
        <div className={'flex flex-row justify-end items-center mr-4'}>
          <span className={'icon'}>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span className={'icon'}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default NoorseFooter
