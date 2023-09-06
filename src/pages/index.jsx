import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import {
  ArrowRight,
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
import { Logo } from '../static-images/logo.jsx'
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
      <main className={'flex w-full flex-col items-center medium:px-8'}>
        <Section.List>
          <Section>
            <Section.Title>Evenementen</Section.Title>
            <Card>
              <EventList events={getFutureEvents()} EventLink={EventLink} />
            </Card>
          </Section>
          <Section>
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
          <Section>
            <Section.Title>Webshop</Section.Title>
            <Card>
              <Section.TextContent>
                <ExternalLink href={webshopLink}>
                  Ontdek hier onze officiële webshop!
                </ExternalLink>
              </Section.TextContent>
            </Card>
          </Section>
          <Section>
            <Section.Title>Nieuws</Section.Title>
            <NewsList
              NewsCardImage={NewsCardImage}
              shownNewsItems={getNewsItems(3)}
            >
              <Link
                className={'font-bold text-black underline'}
                to={'info/nieuws'}
              >
                Meer Nieuws <ArrowRight />
              </Link>
            </NewsList>
          </Section>
          <Section>
            <Section.Title>Trooper</Section.Title>
            <Card containerClass="flex flex-col items-center">
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

          <Section>
            <Card containerClass="flex flex-col items-center">
              <GatsbyImage
                image={getSportVlaanderenLogo()}
                id="sport-vlaanderen-logo"
                alt={'Sport Vlaanderen Logo'}
                objectFit={'contain'}
                loading="lazy"
                className={`h-full max-h-full w-full max-w-full large:max-w-[500px]`}
              />
            </Card>
          </Section>
        </Section.List>
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
