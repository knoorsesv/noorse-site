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
        <noorse-box>Whute</noorse-box>
        <noorse-box header="Trooper"></noorse-box>
      </div>
      <div className="column">
        <noorse-box header="Nieuws"></noorse-box>
        <Link to="senioren">Senioren</Link>
      </div>
    </div>
    <div style={{ height: '500px' }}>padding</div>
  </Layout>
)

export default IndexPage
