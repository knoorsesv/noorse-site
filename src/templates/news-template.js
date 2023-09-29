import React from 'react'
import { NewsItemPage } from '../components/pages'
import Layout from '../layouts/layout'

const NewsTemplate = ({ pageContext: { newsNode } }) => {
  const newsItem = {
    ...newsNode,
    image: newsNode.image?.gatsbyImageData,
    attachment: newsNode.attachment?.map((attachment) => ({
      ...attachment,
      ...attachment.gatsbyImageData,
    })),
  }
  return (
    <Layout>
      <NewsItemPage newsItem={newsItem} />
    </Layout>
  )
}

export default NewsTemplate
