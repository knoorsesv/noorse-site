import React from 'react'
import { ImageWrapper } from '../../wrappers/image-wrapper.jsx'
import { LinkWrapper } from '../../wrappers/link-wrapper.jsx'
import {
  ArrowRight,
  Card,
  EventList,
  Footer,
  Navbar,
  NewsList,
  ResponsiveVideo,
  Section,
  Seo,
} from '../index'
import { ExternalLink } from '../links/external-link.jsx'

export const HomePage = ({
  version,
  sponsors,
  newsItems,
  siteMap,
  events,
  links,
}) => {
  return (
    <>
      <Navbar pageHasCoverPhoto={true} siteMap={siteMap} />
      {/* todo: reenable the SEO, Helmet crashes */}
      {/* <Seo title="Home" /> */}

      <main className={'flex w-full flex-col items-center medium:px-8'}>
        <Section.List>
          <Section>
            <Section.Title>Evenementen</Section.Title>
            <Card>
              <EventList events={events} />
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
              <LinkWrapper
                className={'font-bold text-black underline'}
                href={'info/nieuws'}
              >
                Meer Nieuws <ArrowRight />
              </LinkWrapper>
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
              {/* todo: this breaks the Astro build, maybe because of the react lazy component? */}
              {/* <ResponsiveVideo
                src={'https://www.youtube.com/embed/jGgVgioUMq0'}
              /> */}
            </Card>
          </Section>

          <Section>
            <Card containerClass="flex flex-col items-center">
              <ImageWrapper
                src="/images/sport-vlaanderen.jpg"
                id="sport-vlaanderen-logo"
                alt={'Sport Vlaanderen Logo'}
                loading="lazy"
                className={`h-full max-h-full w-full max-w-full object-contain large:max-w-[500px]`}
              />
            </Card>
          </Section>
        </Section.List>
      </main>
      <Footer version={version} sponsors={sponsors} />
    </>
  )
}
