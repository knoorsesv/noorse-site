import React from 'react'
import { CategoryPage } from '../components/pages'
import Layout from '../layouts/layout'

const CategoryTemplate = ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <CategoryPage category={categoryNode} />
    </Layout>
  )
}

export default CategoryTemplate
