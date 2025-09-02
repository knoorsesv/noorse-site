import { LinkWrapper } from '../../wrappers/link-wrapper'
import {
  ArrowRight,
  Card,
  CompactNewsList,
  EventList,
  Footer,
  NavbarWithCoverPhoto,
  NewsList,
  Section,
} from '../index.ts'
import { ExternalLink } from '../links/external-link'
import type { FC } from 'react'
// @ts-expect-error todo: find a good way to add a type definition for this
import jako from '../../images/jako-logo.png?format=webp&q=50,100'
import { ImageWrapper } from '../../wrappers/image-wrapper.tsx'
import type { Event } from '../types/event'
import type { NewsItem } from '../types/news'
import type { SiteMap } from '../types/sitemap'
import type { Sponsor } from '../types/sponsor'
import { useBreakpoint } from '../hooks/use-breakpoint.tsx'

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
  const isLarge = useBreakpoint('large')

  return (
    <>
      <NavbarWithCoverPhoto siteMap={siteMap} />
      <main className={'medium:px-8 flex w-full flex-col items-center py-12'}>
        <Section.List>
          <Section className="large:flex large:flex-col">
            <Section.Title>Evenementen</Section.Title>
            <Card className="large:grow">
              <EventList events={events} />
            </Card>
          </Section>
          <Section className="large:flex large:flex-col">
            <Section.Title>Nieuws</Section.Title>
            {isLarge ? (
              <CompactNewsList shownNewsItems={newsItems} />
            ) : (
              <NewsList shownNewsItems={newsItems}>
                <LinkWrapper
                  className={'font-bold text-black underline'}
                  href={'info/nieuws'}
                >
                  Meer Nieuws <ArrowRight />
                </LinkWrapper>
              </NewsList>
            )}
          </Section>
          <Section>
            <Section.Title>Webshop</Section.Title>
            <Card containerClass="flex flex-col items-center">
              <ExternalLink href={links.webshopLink}>
                Ontdek hier onze officiële webshop!
              </ExternalLink>
              <a
                href={links.webshopLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImageWrapper
                  src={jako as string}
                  loading="lazy"
                  alt={'Jako logo'}
                  className={'w-auto object-contain'}
                />
              </a>
            </Card>
          </Section>
        </Section.List>
      </main>
      <Footer version={version} sponsors={sponsors} />
    </>
  )
}
