import { isFuture, parse } from 'date-fns'
import { graphql, useStaticQuery } from 'gatsby'

export const getFutureEvents = () => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvenement(sort: { fields: datum }) {
        nodes {
          naam
          datum(formatString: "DD/MM/YY")
          eindDatum(formatString: "DD/MM/YY")
          aankondiging {
            title
          }
        }
      }
    }
  `)
  const eventIsInfuture = (event) =>
    isFuture(parse(event.datum, 'dd/MM/yy', new Date()))

  return events.allContentfulEvenement.nodes.filter(eventIsInfuture)
}
