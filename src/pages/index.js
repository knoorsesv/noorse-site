import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Masonry from 'react-masonry-css'
import { NewsCard } from '../components/newsCard'
import { ExternalLink, TextBlock } from '../components/text'
import { EventList } from '../components/events'
import { Card } from '../components/cards'
import { Title } from '../components/titles'
import { ResponsiveVideo } from '../components/video'

const EventsSection = ({ className }) => {
  return <Section className={className}>
    <Title>Evenementen</Title>
    <Card className={'mb-4'}>
      <div className={'py-2 px-3'}>
        <EventList/>
      </div>
    </Card>
  </Section>
}
const TrooperSection = ({ className }) => {
  return <Section className={className}>
    <Title>Trooper</Title>
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
      <div className={'flex justify-center p-4'}>
        <ResponsiveVideo
          src={'https://www.youtube.com/embed/jGgVgioUMq0'}
        />
      </div>
    </Card>
  </Section>
}

export default () => {
  const newsItems = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { fields: createdAt, order: DESC }) {
        nodes {
          blurb
          title
          body {
            json
          }
          image {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1,
  }

  return (
    <Layout coverPhoto={true}>
      <SEO title="Home" keywords={[`noorse`]}/>

      <div
        className={'flex flex-col lg:grid gap-5 grid-cols-3 bg-green md:bg-gray-light md:px-12'}
        id="homepage-content"
      >
        <Section className={'lg:col-span-2'} id="news-list">
          <Title>Nieuws</Title>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="masonry-column"
          >
            {newsItems.allContentfulNews.nodes.map((node) => (
              <div key={node.title} className={'py-2'}>
                <NewsCard newsNode={node}/>
              </div>
            ))}
          </Masonry>
        </Section>
        <div className={'hidden lg:flex lg:flex-col'}>
          <EventsSection/>
          <TrooperSection/>
        </div>
        <EventsSection className={'lg:hidden'}/>
        <TrooperSection className={'lg:hidden'}/>
      </div>
    </Layout>
  )
}

const Section = ({ children, className }) => {
  return <section className={`${className} bg-gray-light md:bg-transparent px-6 pt-4 pb-6 md:pb-2 mb-4 md:mb-2`}>
    {children}
  </section>
}
