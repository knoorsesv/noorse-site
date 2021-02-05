import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
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
          aankondiging {
            title
          }
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
  return events.length ? (
    <table>
      <tbody>
        {events.map((event) => (
          <tr key={event.naam}>
            <td className={'border-0'}>{event.datum}</td>
            <td className={'border-0'}>
              {event.aankondiging ? (
                <Link
                  className={'underline text-black'}
                  to={`/nieuws/${event.aankondiging.title}`}
                >
                  {event.naam}
                </Link>
              ) : (
                <span className={''}> {event.naam}</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <span className={'text-center'}>Geen evenementen gepland</span>
  )
}
