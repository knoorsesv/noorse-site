import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { InfoBestuurPage } from '../../components/pages'
import Layout from '../../layouts/layout'

const query = graphql`
  query {
    allContentfulBestuurslid(sort: { fields: naam }) {
      edges {
        node {
          naam
          email
          title
          type
        }
      }
    }
  }
`

const Bestuur = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <InfoBestuurPage leden={data.allContentfulBestuurslid.edges} />
    </Layout>
  )
}

export default Bestuur
