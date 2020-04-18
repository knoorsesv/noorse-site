import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`noorse`]}/>
    <div>carrousel</div>
    <div>
      <div>
        <div>Whute</div>
        <div>Trooper</div>
      </div>
      <div>
        <h1>Nieuws</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
