import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { isFuture, parse } from 'date-fns'

export const EventList = () => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvenement(sort: { fields: datum }) {
        nodes {
          naam
          datum(formatString: "DD-MM-YYYY")
        }
      }
    }
  `)

  const eventIsInfuture = (event) =>
    isFuture(parse(event.datum, 'dd-MM-yyyy', new Date()))

  const futureEvents = events.allContentfulEvenement.nodes.filter(
    eventIsInfuture
  )

  return (
    <div className={'flex flex-col'}>
      {futureEvents.map((event) => (
        <div
          key={event.naam}
          className={
            'flex flex-row lg:flex-col xl:flex-row xl:px-4 justify-between'
          }
        >
          <span className={'lg:mr-2 lg:underline lg:pb-2'}>{event.datum}</span>
          <span className={'text-end'}> {event.naam}</span>
        </div>
      ))}
    </div>
  )
}
