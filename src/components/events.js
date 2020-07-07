import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as moment from 'moment'

const eventIsInfuture = (event) => moment(event.datum).isSameOrAfter(moment())
const earliestFirst = (a, b) =>
  moment(a.datum).isAfter(moment(b.datum)) ? 1 : -1

export const EventList = () => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvenement {
        nodes {
          naam
          datum
        }
      }
    }
  `)

  const formattedEvents = events.allContentfulEvenement.nodes
    .filter(eventIsInfuture)
    .sort(earliestFirst)

  return (
    <div className={'flex flex-col'}>
      {formattedEvents.map((event) => (
        <div key={event.naam} className={'flex flex-row justify-between'}>
          <span>{event.datum}</span>
          <span className={'text-end'}> {event.naam}</span>
        </div>
      ))}
    </div>
  )
}
