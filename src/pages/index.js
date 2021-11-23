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
          <div className={'text-center px-2'}>
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

const CovidSection = ({ className }) => {
  return (
    <Section className={`${className}`}>
      <SectionTitle>Covid-19</SectionTitle>
      <Card>
        <div className={'text-center'}>
          Op Noorse zijn{' '}
          <ExternalLink
            icon={false}
            url={'https://www.sport.vlaanderen/sporten-in-tijden-van-corona/'}
          >
            de algemene veiligheidsmaatregelen omtrent COVID-19
          </ExternalLink>{' '}
          van kracht.
        </div>
        <div className={'text-center'}>
          De specifieke maatregelen vindt u{' '}
          <Link to={'/nieuws/Nieuwe%20COVID%20maatregelen'}>hier.</Link>{' '}
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

      <Seo title="Home" keywords={[`noorse`]} />
      {/*todo: don't do this with a grid*/}
      <main
        className={'large:flex large:flex-col large:items-center large:w-full'}
      >
        <div
          className={ctl(`flex flex-col large:grid
        large:gap-2 grid-cols-3
        medium:px-12 large:px-6 large:mx-24
        large:bg-gray-light large:max-w-[1200px]
        `)}
          id="homepage-content"
        >
          <NieuwsSection className={'large:col-span-2 large:row-span-4'} />
          <WebshopSection className={'large:row-start-1 large:col-start-3'} />
          <EventsSection className={'large:row-start-2 large:col-start-3'} />
          <CovidSection className={'large:row-start-3 large:col-start-3'} />
          <TrooperSection className={'large:row-start-4 large:col-start-3'} />
          <Section className={'large:row-start-5 large:col-start-3'}>
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
