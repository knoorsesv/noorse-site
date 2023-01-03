import React from 'react'
import { Card } from './cards.jsx'
import { Section } from './layout/section'
import { SectionTitle } from './titles'

export const EventsSection = ({ className, futureEvents, EventLink }) => {
  return (
    <Section className={className}>
      <SectionTitle>Evenementen</SectionTitle>
      <Card className={'mb-4'}>
        <div className={'py-2 px-3'}>
          <EventList events={futureEvents} EventLink={EventLink} />
        </div>
      </Card>
    </Section>
  )
}

const EventList = ({ events, EventLink }) => {
  return events.length ? (
    <table>
      <tbody>
        {events.map((event) => (
          <tr key={event.naam}>
            <td className={'border-0'}>
              {event.datum} {event.eindDatum ? ` - ${event.eindDatum}` : ''}
            </td>
            <td className={'border-0'}>
              {event.aankondiging ? (
                <EventLink event={event} />
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
