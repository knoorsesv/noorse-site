import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'

const BestuurPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allContentfulBestuurslid {
            edges {
              node {
                naam
                email
                phone
                title
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          Bestuur
          {data.allContentfulBestuurslid.edges.map(createBestuurslidComponent)}
        </div>
      )}
    />
  </Layout>
)

function createBestuurslidComponent(edge) {
  return (
    <div>
      {edge.node.naam}
      {edge.node.title}
      {edge.node.email}
      {edge.node.phone}
    </div>
  )
}

export default BestuurPage
