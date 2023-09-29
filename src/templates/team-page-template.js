import React from 'react'
import { TeamPage } from '../components/pages'
import Layout from '../layouts/layout'

const TeamPageTemplate = ({
  pageContext: {
    contentfulPloeg,
    googleCalId,
    teamCalendar,
    teamSeriesAndRankings,
  },
}) => {
  return (
    <Layout>
      <TeamPage
        ploeg={contentfulPloeg}
        rankings={teamSeriesAndRankings?.rankings}
        series={teamSeriesAndRankings?.series}
        teamCalendar={teamCalendar}
        googleCalId={googleCalId}
      />
    </Layout>
  )
}

export default TeamPageTemplate
