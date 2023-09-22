import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../layouts/layout'
import { CalendarPage } from '../components/pages'

export const query = graphql`
  query ($clubId: ID!, $startDate: String!, $endDate: String!) {
    vv {
      clubMatchesAssignations(
        clubId: $clubId
        language: nl
        startDate: $startDate
        endDate: $endDate
        hasLocation: true
      ) {
        id
        startTime
        title
        homeTeam {
          name
        }
        awayTeam {
          name
        }
        outcome {
          status
          homeTeamGoals
          awayTeamGoals
        }
      }
    }
  }
`
// todo: outcome not needed in query?

const KalenderTemplate = ({ data }) => {
  return (
    <Layout>
      <CalendarPage games={data?.vv?.clubMatchesAssignations || []} />
    </Layout>
  )
}

export default KalenderTemplate
