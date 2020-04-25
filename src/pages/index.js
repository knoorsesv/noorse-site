import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link, StaticQuery } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allContentfulNews {
            nodes {
          body {
            json
          }
          title
        }
          }
        }
      `}
      render={(data) => (
        <div>
          {data.allContentfulNews.nodes.map((node)=>(
            <Link to={node.title}>{node.title}</Link>
          ))}
        </div>
      )}
    />
    <SEO title="Home" keywords={[`noorse`]} />
    <div>carrousel</div>
    <div>
      <div>
        <div>Whute</div>
        <div style={{height: 600}}>Trooper</div>
      </div>
      <div>
        <h1>Nieuws</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
