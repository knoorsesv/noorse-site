import React from 'react'
import { NewsItemPage } from '../components/pages'
import Layout from '../layouts/layout'

const NewsTemplate = ({ pageContext: { newsNode } }) => {
  return (
    <Layout>
      <NewsItemPage newsItem={newsNode} />
    </Layout>
  )
}

export default NewsTemplate
