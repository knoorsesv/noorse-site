import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../layouts/layout'

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

const KalenderPage = ({ data }) => {
  return (
    <Layout>
      <KalenderPage games={data?.vv?.clubMatchesAssignations || []} />
    </Layout>
  )
}

export default KalenderPage
