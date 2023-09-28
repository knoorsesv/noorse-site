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
  Seo,
} from '../index'
import { ImageWrapper } from '../../wrappers/image-wrapper.jsx'

export const HomePage = ({
  Link,
  version,
  sponsors,
  newsItems,
  siteMap,
  sportVlaanderenLogo,
  events,
  links,
}) => {
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

  return (
    <>
      <Navbar
        pageHasCoverPhoto={true}
        siteMap={siteMap}
        InfoPageLink={InfoPageLink}
      />

      <Seo title="Home" />
      <main className={'flex w-full flex-col items-center medium:px-8'}>
        <Section.List>
          <Section>
            <Section.Title>Evenementen</Section.Title>
            <Card>
              <EventList events={events} EventLink={EventLink} />
            </Card>
          </Section>
          <Section>
            <Section.Title>Nieuwsbrief</Section.Title>
            <Card>
              <Section.TextContent>
                <p>Noorse heeft een nieuwsbrief!</p>
                <ExternalLink href={links.newsletterLink}>
                  Schrijf je hier in.
                </ExternalLink>
              </Section.TextContent>
            </Card>
          </Section>
          <Section>
            <Section.Title>Webshop</Section.Title>
            <Card>
              <Section.TextContent>
                <ExternalLink href={links.webshopLink}>
                  Ontdek hier onze officiële webshop!
                </ExternalLink>
              </Section.TextContent>
            </Card>
          </Section>
          <Section>
            <Section.Title>Nieuws</Section.Title>
            <NewsList shownNewsItems={newsItems}>
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
              {/* todo: also just make this a static image in the images folder */}
              <ImageWrapper
                image={sportVlaanderenLogo}
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
      <Footer version={version} sponsors={sponsors} />
    </>
  )
}
