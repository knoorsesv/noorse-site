import React from 'react'
import Layout from '../layouts/layout'
import { TeamPageWithoutVV } from '../components/pages'

const TeamPage = ({ pageContext: { contentfulPloeg } }) => {
  return (
    <Layout>
      <TeamPageWithoutVV ploeg={contentfulPloeg} />
    </Layout>
  )
}

export default TeamPage
