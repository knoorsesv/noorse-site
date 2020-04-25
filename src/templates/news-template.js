import React from "react"
import Layout from '../components/layout'

export default ({ pageContext: { newPageNode } }) => (
  <Layout>
   <h1>{newPageNode.title}</h1>
  </Layout>
)