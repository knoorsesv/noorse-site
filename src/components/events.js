import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { isFuture, parse } from 'date-fns'
import { Section } from './layout/section'
import { SectionTitle } from './titles'
import { Card } from './cards'

export const EventsSection = ({ className }) => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvenement(sort: { fields: datum }) {
        nodes {
          naam
          datum(formatString: "DD/MM/YY")
        }
      }
    }
  `)

  const eventIsInfuture = (event) =>
    isFuture(parse(event.datum, 'dd/MM/yy', new Date()))

  const futureEvents = events.allContentfulEvenement.nodes.filter(
    eventIsInfuture
  )

  return (
    <Section className={className}>
      <SectionTitle>Evenementen</SectionTitle>
      <Card className={'mb-4'}>
        <div className={'py-2 px-3'}>
          <EventList events={futureEvents} />
        </div>
      </Card>
    </Section>
  )
}

export const EventList = ({ events }) => {
  return (
    <div className={'flex flex-col'}>
      {events.length ? (
        events.map((event) => (
          <div
            key={event.naam}
            className={
              'flex flex-row lg:flex-col xl:flex-row xl:px-4 justify-between'
            }
          >
            <span className={'lg:mr-2 lg:underline lg:pb-2'}>
              {event.datum}
            </span>
            <span className={'text-end'}> {event.naam}</span>
          </div>
        ))
      ) : (
        <span className={'text-center'}>Geen evenementen gepland</span>
      )}
    </div>
  )
}
