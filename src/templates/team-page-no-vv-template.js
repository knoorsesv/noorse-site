import React from 'react'
import Layout from '../layouts/layout'
import { TeamPageWithoutVV } from '../components/pages'
import { Link } from 'gatsby'

const TeamPage = ({ pageContext: { contentfulPloeg } }) => {
  return (
    <Layout>
      <TeamPageWithoutVV ploeg={contentfulPloeg} Link={Link} />
    </Layout>
  )
}

export default TeamPage
