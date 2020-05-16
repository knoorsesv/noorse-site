import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Masonry from 'react-masonry-css'
import { NewsCard } from '../components/newsCard'
import { ExternalLink, TextBlock } from '../components/text'
import { EventList } from '../components/events'
import { Card, CardHeader } from '../components/cards'
import { Title } from '../components/titles'

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
          <Title>Nieuws</Title>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="masonry-column"
          >
            {newsItems.allContentfulNews.nodes.map(NewsCard)}
          </Masonry>
        </div>
        <div className={'flex flex-col'}>
          <Card>
            <CardHeader>
              <h1 className={'text-center w-full'}>Evenementen</h1>
            </CardHeader>
            <div className={'py-2 px-3'}>
              <EventList />
            </div>
          </Card>
          <Card>
            <TextBlock>
              <div className={'text-center px-2'}>
                Steun onze vereniging vanaf nu via{' '}
                <ExternalLink url="https://www.trooper.be/noorse">
                  Trooper
                </ExternalLink>{' '}
                !
              </div>
            </TextBlock>
            <div className={'flex justify-center pb-4'}>
              <iframe
                id={'trooperVideo'}
                title="Trooper instruction video"
                className={
                  'object-contain lg:w-video-tablet lg:h-video-tablet xl:w-video-desktop xl:h-video-desktop'
                }
                src="https://drive.google.com/file/d/1tyQvH4X6YhS0davnGttLbuSnJ71raj1C/preview"
              />
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
