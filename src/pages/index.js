import React from 'react'
import SEO from '../components/seo'
import { ExternalLink, TextBlock } from '../components/text'
import { EventList } from '../components/events'
import { Card } from '../components/cards'
import { Title } from '../components/titles'
import { ResponsiveVideo } from '../components/video'
import { Navbar } from '../components/navbar'
import NoorseFooter from '../components/noorseFooter'
import { DisclaimerPopup } from '../components/disclaimer'
import { NewsList } from '../components/newsList'
import { webshopLink } from '../env/constants'
import { Link } from 'gatsby'

const EventsSection = ({ className }) => {
  return (
    <Section className={className}>
      <Title>Evenementen</Title>
      <Card className={'mb-4'}>
        <div className={'py-2 px-3'}>
          <EventList />
        </div>
      </Card>
    </Section>
  )
}

const TrooperSection = ({ className }) => {
  return (
    <Section className={className}>
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
          <ResponsiveVideo src={'https://www.youtube.com/embed/jGgVgioUMq0'} />
        </div>
      </Card>
    </Section>
  )
}

const WebshopSection = ({ className }) => {
  return (
    <Section className={`${className}`}>
      <Title>Webshop</Title>
      <Card>
        Ontdek{' '}
        <ExternalLink icon={false} url={webshopLink}>
          hier
        </ExternalLink>{' '}
        onze officiële webshop!
      </Card>
    </Section>
  )
}

const CovidSection = ({ className }) => {
  return (
    <Section className={`${className}`}>
      <Title>Covid-19</Title>
      <Card>
        De regels die op onze club van kracht zijn vindt u{' '}
        <Link to={'/covid'}>hier</Link>
      </Card>
    </Section>
  )
}

const NieuwsSection = ({ className }) => {
  const newsListBreakPoints = {
    default: 3,
    1400: 2,
    600: 1,
  }
  return (
    <Section id="news-list" className={className}>
      <Title>Nieuws</Title>
      {NewsList(newsListBreakPoints)}
    </Section>
  )
}

export default () => {
  return (
    <div>
      <DisclaimerPopup />

      <Navbar coverPhoto={true} />

      <SEO title="Home" keywords={[`noorse`]} />

      <div
        className={`flex flex-col lg:grid
        gap-2 grid-cols-3 
        md:px-12 lg:px-6 lg:mx-8
        lg:bg-gray-light
        `}
        id="homepage-content"
      >
        <NieuwsSection className={'lg:col-span-2 lg:row-span-4'} />
        <EventsSection className={'lg:row-start-1 lg:col-start-3'} />
        <WebshopSection className={'lg:row-start-2 lg:col-start-3'} />
        <CovidSection className={'lg:row-start-3 lg:col-start-3'} />
        <TrooperSection className={'lg:row-start-4 lg:col-start-3'} />
      </div>
      <NoorseFooter />
    </div>
  )
}

export const Section = ({ children, className }) => {
  return (
    <section
      className={`${className} 
  bg-gray-light md:bg-transparent
  px-6 pt-4 pb-6 md:pb-2 mb-4 md:mb-2
  `}
    >
      {children}
    </section>
  )
}
