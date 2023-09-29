import { graphql } from 'gatsby'
import React from 'react'
import { TeamPage } from '../components/pages'
import Layout from '../layouts/layout'

export const query = graphql`
  query ($teamId: ID!) {
    vv {
      teamCalendar(teamId: $teamId, language: nl) {
        id
        startTime
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
      teamSeriesAndRankings(teamId: $teamId, language: nl) {
        series {
          serieId
          name
        }
        rankings {
          name
          rankings {
            teams {
              name
              position
              points
            }
          }
        }
      }
    }
  }
`

const TeamPageTemplate = ({
  pageContext: { contentfulPloeg, googleCalId },
  data,
}) => {
  return (
    <Layout>
      <TeamPage
        ploeg={contentfulPloeg}
        rankings={data?.vv?.teamSeriesAndRankings?.rankings}
        series={data?.vv?.teamSeriesAndRankings?.series}
        teamCalendar={data?.vv?.teamCalendar}
        googleCalId={googleCalId}
      />
    </Layout>
  )
}

export default TeamPageTemplate
