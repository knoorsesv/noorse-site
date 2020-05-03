import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import logo from '../images/Logo_highres.png'
import Masonry from 'react-masonry-css'
import { NewsCard } from '../components/newsCard'
import noorseCover from '../images/noorse_cover.jpg'

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
    500: 1,
  }

  return (
    <Layout coverPhoto={true}>
      <SEO title="Home" keywords={[`noorse`]} />

      <div className={'grid gap-5 grid-cols-3'}>
        <div className={'col-span-2'}>
          <h1 className={'title'}>Nieuws</h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
          >
            {newsItems.allContentfulNews.nodes.map(NewsCard)}
          </Masonry>
        </div>
        <div className={'flex flex-col'}>
          <div className={'box'}>
            <h1>Next game</h1>
            <div className={'flex justify-around items-center mt-6'}>
              <img src={logo} className={'max-w-1/3'} alt={'Logo Home Team'} />
              <span>VS</span>
              <img src={logo} className={'max-w-1/3'} alt={'Logo Away Team'} />
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
