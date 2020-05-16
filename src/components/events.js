import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as moment from 'moment'

const datumToMoment = (event) => {
  event.datum = moment(event.datum)
  return event
}

const eventIsInfuture = (event) => event.datum.isSameOrAfter(moment())
const earliestFirst = (a, b) => (a.datum.isAfter(b.datum) ? 1 : -1)
const formatDate = (event) => {
  event.datum = event.datum.format('DD-MM-YYYY')
  return event
}

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
    .map(datumToMoment)
    .filter(eventIsInfuture)
    .sort(earliestFirst)
    .map(formatDate)

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
