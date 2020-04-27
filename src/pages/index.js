import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import contract from '../images/contract.jpg'
import logo from '../images/Logo_highres.png'
import Masonry from 'react-masonry-css'
import { navigate } from 'gatsby-link'

const NewsCard = (newsNode) => {
  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }
  return <div className={'card mx-2 my-2 max-w-full'} onClick={goToNews}>
    {newsNode.title.includes('spelers') && (
      <div className={'card-image'}>
        <figure className={'image'}>
          <img src={contract} alt={'News header '}/>
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
}

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

  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1
  };

  return (
    <Layout>
      <SEO title="Home" keywords={[`noorse`]}/>
      <div className={'grid gap-5 grid-cols-3'}>
        <div className={'col-span-2'}>
          <h1 className={'title'}>Nieuws</h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid">
            {newsItems.allContentfulNews.nodes.map(NewsCard)}
          </Masonry>
        </div>
        <div className={'flex flex-col'}>
          <div className={'box'}>
            <h1>Next game</h1>
            <div className={'flex justify-around items-center mt-6'} >
              <img src={logo} className={'max-w-1/3'} alt={'Logo Home Team'}/>
              <span>VS</span>
              <img src={logo} className={'max-w-1/3'} alt={'Logo Away Team'}/>
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

