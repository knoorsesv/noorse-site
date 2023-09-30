import React from 'react'
import { LinkWrapper } from '../wrappers/link-wrapper.jsx'

export const EventList = ({ events }) => {
  const EventLink = ({ event }) => {
    return (
      <LinkWrapper
        className={'text-black underline'}
        // todo: extract this logic of generating the url to a util, or just map it onto the input object
        href={`/nieuws/${event.aankondiging.title
          ?.replace('/', '-')
          .toLowerCase()}`}
      >
        {event.naam}
      </LinkWrapper>
    )
  }

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
                <span>{event.naam}</span>
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
