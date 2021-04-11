import React from 'react'
import Seo from '../components/seo'
import { ExternalLink, TextBlock } from '../components/text'
import { Card, ClickableCard } from '../components/cards'
import { SectionTitle } from '../components/titles'
import { ResponsiveVideo } from '../components/video'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { NewsList } from '../components/newsList'
import { webshopLink } from '../env/constants'
import { navigate } from 'gatsby-link'
import { Section } from '../components/layout/section'
import { EventsSection } from '../components/events'
import { SportVlaanderen } from '../components/sport-vlaanderen-logo'

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
  const goToCovidPage = () => {
    // this is flaky because page title comes from contentful, but hey it'll all be over soon right?
    navigate(`/info/Covid Regels`)
  }
  return (
    <Section className={`${className}`}>
      <SectionTitle>Covid-19</SectionTitle>
      <ClickableCard onClick={goToCovidPage}>
        <div className={'text-center'}>
          De regels die op onze club van kracht zijn vindt u{' '}
          <span className={'underline'}>hier</span>
        </div>
      </ClickableCard>
    </Section>
  )
}

const NieuwsSection = ({ className }) => {
  const newsListBreakPoints = {
    default: 3,
    1600: 2,
    600: 1,
  }
  return (
    <Section id="news-list" className={className}>
      <SectionTitle>Nieuws</SectionTitle>
      {NewsList(newsListBreakPoints)}
    </Section>
  )
}

const Home = () => {
  return (
    <div>
      <Navbar pageHasCoverPhoto={true} />

      <Seo title="Home" keywords={[`noorse`]} />

      <div
        className={`flex flex-col lg:grid
        lg:gap-2 grid-cols-3 
        md:px-12 lg:px-6 lg:mx-8 xl:mx-64        
        lg:bg-gray-light
        `}
        id="homepage-content"
      >
        <NieuwsSection className={'lg:col-span-2 lg:row-span-4'} />
        <WebshopSection className={'lg:row-start-1 lg:col-start-3'} />
        <EventsSection className={'lg:row-start-2 lg:col-start-3'} />
        <CovidSection className={'lg:row-start-3 lg:col-start-3'} />
        <TrooperSection className={'lg:row-start-4 lg:col-start-3'} />
        <Section className={'lg:row-start-5 lg:col-start-3'}>
          <Card>
            <SportVlaanderen />
          </Card>
        </Section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
