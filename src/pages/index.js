import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import logo from '../images/Logo_highres.png'
import Masonry from 'react-masonry-css'
import { NewsCard } from '../components/newsCard'
import { ExternalLink, TextBlock } from '../components/text'

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

      <div
        className={'flex flex-col md:grid gap-5 grid-cols-3'}
        id="homepage-content"
      >
        <div className={'col-span-2'} id="news-list">
          <h1 className={'title'}>Nieuws</h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="masonry-column"
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
            <TextBlock>
              <div className={'text-center'}>
                Steun onze vereniging vanaf nu via{' '}
                <ExternalLink url="https://www.trooper.be/noorse">
                  Trooper
                </ExternalLink>{' '}
                !
              </div>
            </TextBlock>
            <div className={'flex justify-center pb-4'}>
              <iframe
                title="Trooper instruction video"
                className={
                  'object-contain lg:w-video-tablet lg:h-video-tablet xl:w-video-desktop xl:h-video-desktop'
                }
                src="https://drive.google.com/file/d/1tyQvH4X6YhS0davnGttLbuSnJ71raj1C/preview"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
