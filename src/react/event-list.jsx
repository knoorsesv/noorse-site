import { format } from 'date-fns'
import { LinkWrapper } from '../wrappers/link-wrapper.tsx'

export const EventList = ({ events }) => {
  const EventLink = ({ event }) => {
    return (
      <LinkWrapper
        className={'text-black underline'}
        // todo: extract this logic of generating the url to a util, or just map it onto the input object
        href={`/nieuws/${event.aankondiging.fields.title
          ?.replace('/', '-')
          .toLowerCase()}`}
      >
        {event.naam}
      </LinkWrapper>
    )
  }

  const formatDate = (datum) => format(new Date(datum), 'dd/MM/yy')

  return events.length ? (
    <table>
      <tbody>
        {events.map((event) => (
          <tr key={event.naam}>
            <td className={'border-0'}>
              {formatDate(event.datum)}
              {event.eindDatum ? ` - ${formatDate(event.eindDatum)}` : ''}
            </td>
            <td className={'border-0'}>
              {event.aankondiging &&
              event.aankondiging.fields &&
              event.aankondiging.fields.title ? (
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
