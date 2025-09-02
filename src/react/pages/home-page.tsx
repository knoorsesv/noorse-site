import { ImageWrapper } from '../../wrappers/image-wrapper'
import { LinkWrapper } from '../../wrappers/link-wrapper'
import {
  ArrowRight,
  Card,
  EventList,
  Footer,
  NavbarWithCoverPhoto,
  NewsList,
  ResponsiveVideo,
  Section,
} from '../index.ts'
import { ExternalLink } from '../links/external-link'
// @ts-expect-error todo: find a good way to add a type definition for this
import sportVlaanderen from '../../images/sport-vlaanderen.webp?format=webp&q=50,100'
import type { FC } from 'react'
import type { Sponsor } from '../types/sponsor'
import type { NewsItem } from '../types/news'
import type { SiteMap } from '../types/sitemap'
import type { Event } from '../types/event'

export const HomePage: FC<{
  version: string
  sponsors: Sponsor[]
  newsItems: NewsItem[]
  siteMap: SiteMap
  events: Event[]
  links: {
    newsletterLink: string
    webshopLink: string
  }
}> = ({ version, sponsors, newsItems, siteMap, events, links }) => {
  return (
    <>
      <NavbarWithCoverPhoto siteMap={siteMap} />
      <main className={'medium:px-8 flex w-full flex-col items-center'}>
        <Section.List>
          <Section>
            <Section.Title>Evenementen</Section.Title>
            <Card>
              <EventList events={events} />
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
              <ResponsiveVideo
                src={'https://www.youtube.com/embed/jGgVgioUMq0'}
              />
            </Card>
          </Section>

          <Section>
            <Section.TextContent>
              <ImageWrapper
                src={sportVlaanderen as string}
                id="sport-vlaanderen-logo"
                alt={'Sport Vlaanderen Logo'}
                loading="lazy"
                className={`w-[500px] object-contain`}
              />
            </Section.TextContent>
          </Section>
        </Section.List>
      </main>
      <Footer version={version} sponsors={sponsors} />
    </>
  )
}
