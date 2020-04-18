import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import './bestuur.scss'

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
      render={data => (
        <div className={'bestuur-list'}>
          {data.allContentfulBestuurslid.edges.map(createBestuurslidComponent)}
        </div>
      )}
    />
  </Layout>
)

function createBestuurslidComponent(edge) {
  return (
    <noorse-person
      naam={edge.node.naam}
      title={edge.node.title}
      email={edge.node.email}
      phone={edge.node.phone}
    ></noorse-person>
  )
}

export default BestuurPage

// https://cdn.contentful.com/spaces/u0xs2v9mjzql/environments/master/entries?access_token=36-6JCv3dOwXO2Ka7Ky7WaCfWhGodvwIp28Yhb_2kiQ
