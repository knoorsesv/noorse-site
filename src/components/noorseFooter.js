import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const SponsorWithLogo = (sponsorNode) => {
  return (<div className={'card p-3 max-w-1/3'}>
    <div className={'card-image'}>
      <figure className={'image'}>
        <img src={sponsorNode.logo.localFile.publicURL}/>
      </figure>
    </div>
    <div className={'card-content text-center'}>
      {sponsorNode.naam}
    </div>
  </div>)
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
  console.log(sponsors)
  return (<footer className={'footer'}>
      <div className={'grid grid-cols-5 mb-24'}>
        <div className={'col-start-1 col-end-3 flex flex-col'}>
          <h1 className={'title'}>
            Sponsors
          </h1>
          <div>
            {sponsors.allContentfulSponsor.nodes.map(SponsorWithLogo)}
          </div>
        </div>
        <div className={'col-start-3 col-end-6 flex items-start justify-between'}>
          <div>
            Sitemap?
          </div>
          <div className="is-divider-vertical"></div>
          <div className={'flex content-end flex-col content-end'}>
            <h1 className={'self-end'}>
              Contact
            </h1>
            <span className={'self-end'}>
              Frans de Peuterstraat
            </span>
            <span className={'self-end'}>
              03/543.xx.xx
            </span>
          </div>
        </div>
      </div>
      <div className={''}>
        <span size={'small'}>
          © {new Date().getFullYear()}, K. Noorse S.V.
        </span>
        <span size={'small'}>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <div>
          <i size={'medium'}/>
          <i size={'medium'}/>
        </div>
      </div>
    </footer>
  )
}

export default NoorseFooter
