import ctl from '@netlify/classnames-template-literals'
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Card } from '../components/cards'
import { EventsSection } from '../components/events'
import { Footer } from '../components/footer'
import { Section } from '../components/layout/section'
import { Navbar } from '../components/navbar.jsx'
import { NewsList } from '../components/newsList'
import Seo from '../components/seo'
import { ExternalLink, TextBlock } from '../components/text.jsx'
import { SectionTitle } from '../components/titles'
import { ResponsiveVideo } from '../components/video'
import { newsletterLink, webshopLink } from '../env/constants'
import { getSiteMapForInfoPages } from '../queries/pages'
import { getSportVlaanderenLogo } from '../queries/sport-vlaanderen-logo'
import { getVersion } from '../queries/version'
import { getCoverImageData } from '../queries/cover-image'
import { getFutureEvents } from '../queries/events'
import { getNewsItems } from '../queries/news'
import { getConstrainedLogoData } from '../queries/constrained-logo'
import { Logo } from '../static-images/logo'
import { getSponsors } from '../queries/sponsors'
import { mergeSiteMap } from '../utils/sitemap'

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

const NewsletterSection = ({ className }) => {
  return (
    <Section className={`${className}`}>
      <SectionTitle>Nieuwsbrief</SectionTitle>
      <Card>
        <div className={'text-center'}>
          Noorse heeft een nieuwsbrief! Schrijf je{' '}
          <ExternalLink icon={false} url={newsletterLink}>
            hier
          </ExternalLink>{' '}
          in.
        </div>
      </Card>
    </Section>
  )
}

const NewsCardImage = ({ image }) => {
  const fallBackLogo = getConstrainedLogoData()
  return (
    <div className={'h-[200px] text-center'}>
      <GatsbyImage
        image={image?.gatsbyImageData || fallBackLogo.gatsbyImageData}
        loading={'eager'}
        alt={'Card Header'} // todo: pass a proper alt text here
      />
    </div>
  )
}

const NieuwsSection = ({ className }) => {
  const goToNews = (newsNode) => {
    navigate(`/nieuws/${newsNode.title}`)
  }
  return (
    <Section id="news-list" className={className}>
      <SectionTitle>Nieuws</SectionTitle>
      <NewsList
        NewsCardImage={NewsCardImage}
        shownNewsItems={getNewsItems(6)}
        onClick={goToNews}
      >
        <Link className={'font-bold text-black'} to={'info/nieuws'}>
          ...
        </Link>
      </NewsList>
    </Section>
  )
}

const InfoPageLink = ({ item, className }) => {
  return (
    <Link
      className={className}
      activeClassName={'border-b-2 border-white'}
      to={item.link}
    >
      {item.name}
    </Link>
  )
}

const CoverImage = ({ children, ...props }) => {
  return (
    <GatsbyImage
      image={getCoverImageData()}
      id={'background-image'}
      alt={'Luchtfoto Noorse velden'}
      loading={'eager'}
      objectFit="cover"
      objectPosition="center"
      {...props}
    >
      {children}
    </GatsbyImage>
  )
}

const EventLink = ({ event }) => {
  return (
    <Link
      className={'text-black underline'}
      to={`/nieuws/${event.aankondiging.title}`}
    >
      {event.naam}
    </Link>
  )
}

const Home = () => {
  return (
    <div>
      <Navbar
        pageHasCoverPhoto={true}
        siteMap={mergeSiteMap(getSiteMapForInfoPages())}
        InfoPageLink={InfoPageLink}
        CoverImage={CoverImage}
      />

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
          <NieuwsSection className={'large:col-span-2 large:row-span-5'} />
          <WebshopSection className={'large:col-start-3 large:row-start-1'} />
          <EventsSection
            className={'large:col-start-3 large:row-start-2'}
            futureEvents={getFutureEvents()}
            EventLink={EventLink}
          />
          <TrooperSection className={'large:col-start-3 large:row-start-3'} />
          <NewsletterSection
            className={'large:col-start-3 large:row-start-4'}
          />
          <Section className={'large:col-start-3 large:row-start-5'}>
            <Card>
              <GatsbyImage
                image={getSportVlaanderenLogo()}
                id="sport-vlaanderen-logo"
                alt={'Sport Vlaanderen Logo'}
                objectFit={'contain'}
                loading="lazy"
                className={`h-full max-h-full w-full max-w-full`}
              />
            </Card>
          </Section>
        </div>
      </main>
      <Footer version={getVersion()} Logo={Logo} sponsors={getSponsors()} />
    </div>
  )
}

export default Home
