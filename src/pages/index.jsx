import ctl from '@netlify/classnames-template-literals'
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import {
  Card,
  EventList,
  ExternalLink,
  Footer,
  Navbar,
  NewsList,
  ResponsiveVideo,
  Section,
} from '../components'
import Seo from '../components/seo' // todo: also import this from barrel file
import { newsletterLink, webshopLink } from '../env/constants'
import { getConstrainedLogoData } from '../queries/constrained-logo'
import { getCoverImageData } from '../queries/cover-image'
import { getFutureEvents } from '../queries/events'
import { getNewsItems } from '../queries/news'
import { getSiteMapForInfoPages } from '../queries/pages'
import { getSponsors } from '../queries/sponsors'
import { getSportVlaanderenLogo } from '../queries/sport-vlaanderen-logo'
import { getVersion } from '../queries/version'
import { Logo } from '../static-images/logo'
import { mergeSiteMap } from '../utils/sitemap'

const Home = () => {
  return (
    <>
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
          <Section id="news-list" className="large:col-span-2 large:row-span-5">
            <Section.Title>Nieuws</Section.Title>
            <NewsList
              NewsCardImage={NewsCardImage}
              shownNewsItems={getNewsItems(6)}
              onClick={(newsNode) => navigate(`/nieuws/${newsNode.title}`)}
            >
              <Link className={'font-bold text-black'} to={'info/nieuws'}>
                ...
              </Link>
            </NewsList>
          </Section>
          <Section className="large:col-start-3 large:row-start-1">
            <Section.Title>Webshop</Section.Title>
            <Card>
              <Section.TextContent>
                <ExternalLink href={webshopLink}>
                  Ontdek hier onze officiële webshop!
                </ExternalLink>
              </Section.TextContent>
            </Card>
          </Section>
          <Section className="large:row-start-2' large:col-start-3">
            <Section.Title>Evenementen</Section.Title>
            <Card>
              <EventList events={getFutureEvents()} EventLink={EventLink} />
            </Card>
          </Section>
          <Section className={'large:col-start-3 large:row-start-3'}>
            <Section.Title>Trooper</Section.Title>
            <Card>
              <Section.TextContent>
                <ExternalLink href="https://www.trooper.be/noorse">
                  Steun onze vereniging vanaf nu via Trooper !
                </ExternalLink>
              </Section.TextContent>
              <ResponsiveVideo
                src={'https://www.youtube.com/embed/jGgVgioUMq0'}
              />
            </Card>
          </Section>
          <Section className="large:col-start-3 large:row-start-4">
            <Section.Title>Nieuwsbrief</Section.Title>
            <Card>
              <Section.TextContent>
                <p>Noorse heeft een nieuwsbrief!</p>
                <ExternalLink href={newsletterLink}>
                  Schrijf je hier in.
                </ExternalLink>
              </Section.TextContent>
            </Card>
          </Section>
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
    </>
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

export default Home
