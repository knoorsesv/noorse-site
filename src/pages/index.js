import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`noorse`]} />
    <div>carrousel</div>
    <div className="columns is-mobile">
      <div className="column">
        <div>Whute</div>
        <div header="Trooper"></div>
      </div>
      <div className="column">
        <div header="Nieuws"></div>
        <Link to="senioren">Senioren</Link>
      </div>
    </div>
    <div style={{ height: '500px' }}>padding</div>
  </Layout>
)

export default IndexPage
