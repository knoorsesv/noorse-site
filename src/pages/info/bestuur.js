import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { InfoBestuurPage } from '../../components/pages'

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
  return <InfoBestuurPage leden={data.allContentfulBestuurslid.edges} />
}

export default Bestuur
