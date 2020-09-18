import React from 'react'
import SEO from '../components/seo'
import { ExternalLink, TextBlock } from '../components/text'
import { EventList } from '../components/events'
import { Card } from '../components/cards'
import { Title } from '../components/titles'
import { ResponsiveVideo } from '../components/video'
import { Navbar } from '../components/navbar'
import {
  ContactBlock,
  CopyRightFooter,
  SponsorList,
} from '../components/noorseFooter'
import { DisclaimerPopup } from '../components/disclaimer'
import { NewsList } from '../components/newsList'

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

const SponsorSection = ({ className }) => {
  return (
    <Section className={`${className} lg:px-12`}>
      <Title>Sponsors</Title>
      <SponsorList />
    </Section>
  )
}

export default () => {
  const newsListBreakPoints = {
    default: 3,
    1024: 2,
    500: 1,
  }

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
        <div className={'lg:col-span-2'}>
          <Section id="news-list">
            <Title>Nieuws</Title>
            {NewsList(newsListBreakPoints)}
          </Section>
          <SponsorSection />
        </div>
        <div className={'hidden lg:flex lg:flex-col'}>
          <EventsSection />
          <TrooperSection />
          <Section>
            <Title>Contact</Title>
            <ContactBlock />
          </Section>
        </div>
        <EventsSection className={'lg:hidden'} />
        <TrooperSection className={'lg:hidden'} />
        <Section className={'lg:hidden'}>
          <ContactBlock />
        </Section>
      </div>
      <CopyRightFooter />
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
