import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import contract from '../images/contract.jpg'
import logo from '../images/Logo_highres.png'

export default () => {
  const newsItems = useStaticQuery(graphql`
        query {
          allContentfulNews {
            nodes {
              blurb
              title
            }
          }
        }
      `)
  return (
    <Layout>
      <SEO title="Home" keywords={[`noorse`]}/>
      <div className={'grid gap-5 grid-cols-3'}>
        <div className={'col-span-2'}>
          <h1 className={'title'}>Nieuws</h1>
          <div className={'flex flex-wrap'}>
            {newsItems.allContentfulNews.nodes.map((newsNode) => (
              <div className={'card mx-2 my-2 flex-auto max-w-1/3 self-start'}>
                {newsNode.title.includes('spelers') && (
                  <div className={'card-image'}>
                    <figure className={'image'}>
                      <img src={contract}/>
                    </figure>
                  </div>
                )}
                <header className={'card-header'}>
                  <p className={'card-header-title'} to={newsNode.title}>{newsNode.title}</p>
                </header>
                {newsNode.blurb && (
                  <div className={'card-content'}>
                    {newsNode.blurb}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={'flex flex-col'}>
          <div className={'box'}>
            <h1>Next game</h1>
            <div className={'flex justify-around items-center mt-6'} >
              <img src={logo} className={'max-w-1/3'}/>
              <span>VS</span>
              <img src={logo} className={'max-w-1/3'}/>
            </div>
          </div>
          <div className={'box'}>
            <h1>Events</h1>
          </div>
          <div className={'box'}>
            <h1>Trooper</h1>
          </div>
          <div className={'box'}>
            <h1>Klassement</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

