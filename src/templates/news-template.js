import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { NewsItemPage } from '../components/pages'
import Layout from '../layouts/layout'

const NewsTemplate = ({ pageContext: { newsNode } }) => {
  return (
    <Layout>
      <NewsItemPage Image={GatsbyImage} newsItem={newsNode} />
    </Layout>
  )
}

export default NewsTemplate
