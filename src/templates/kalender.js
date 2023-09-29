import React from 'react'
import { CalendarPage } from '../components/pages'
import Layout from '../layouts/layout'

const KalenderTemplate = ({ pageContext: { clubMatchesAssignations } }) => {
  return (
    <Layout>
      <CalendarPage games={clubMatchesAssignations || []} />
    </Layout>
  )
}

export default KalenderTemplate
