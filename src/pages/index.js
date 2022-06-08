import React from 'react'
import Seo from '../components/seo'
import { ExternalLink, TextBlock } from '../components/text'
import { Card } from '../components/cards'
import { SectionTitle } from '../components/titles'
import { ResponsiveVideo } from '../components/video'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { NewsList } from '../components/newsList'
import { webshopLink } from '../env/constants'
import { Section } from '../components/layout/section'
import { EventsSection } from '../components/events'
import { SportVlaanderen } from '../components/sport-vlaanderen-logo'
import ctl from '@netlify/classnames-template-literals'
import { Link } from 'gatsby'

const TrooperSection = ({ className }) => {
  return (
    <Section className={className}>
      <SectionTitle>Trooper</SectionTitle>
      <Card>
        <TextBlock>
          <div className={'px-2 text-center'}>
            Steun onze vereniging vanaf nu via{' '}
            <ExternalLink url="https://www.trooper.be/noorse">
              Trooper
            </ExternalLink>{' '}
            !
          </div>
        </TextBlock>
        <div className={'flex justify-center p-4'} title={'trooper-video'}>
          <ResponsiveVideo src={'https://www.youtube.com/embed/jGgVgioUMq0'} />
        </div>
      </Card>
    </Section>
  )
}

const WebshopSection = ({ className }) => {
  return (
    <Section className={`${className}`}>
      <SectionTitle>Webshop</SectionTitle>
      <Card>
        <div className={'text-center'}>
          Ontdek{' '}
          <ExternalLink icon={false} url={webshopLink}>
            hier
          </ExternalLink>{' '}
          onze officiële webshop!
        </div>
      </Card>
    </Section>
  )
}

const NieuwsSection = ({ className }) => {
  return (
    <Section id="news-list" className={className}>
      <SectionTitle>Nieuws</SectionTitle>
      <NewsList maxItems={6} />
    </Section>
  )
}

const Home = () => {
  return (
    <div>
      <Navbar pageHasCoverPhoto={true} />

      <Seo title="Home" />
      {/*todo: don't do this with a grid*/}
      <main
        className={'large:flex large:w-full large:flex-col large:items-center'}
      >
        <div
          className={ctl(`flex grid-cols-3 flex-col
        medium:px-12 large:mx-24
        large:grid large:max-w-[1200px] large:gap-2
        large:bg-gray-light large:px-6
        `)}
          id="homepage-content"
        >
          <NieuwsSection className={'large:col-span-2 large:row-span-4'} />
          <WebshopSection className={'large:col-start-3 large:row-start-1'} />
          <EventsSection className={'large:col-start-3 large:row-start-2'} />
          <TrooperSection className={'large:col-start-3 large:row-start-4'} />
          <Section className={'large:col-start-3 large:row-start-5'}>
            <Card>
              <SportVlaanderen />
            </Card>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
