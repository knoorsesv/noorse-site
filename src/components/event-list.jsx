import React from 'react'

export const EventList = ({ events, EventLink }) => {
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
