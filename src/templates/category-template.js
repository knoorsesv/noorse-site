import { Link } from 'gatsby'
import React from 'react'
import Layout from '../layouts/layout'
import { CategoryPage } from '../components/pages'

const CategoryTemplate = ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <CategoryPage category={categoryNode} Link={Link} />
    </Layout>
  )
}

export default CategoryTemplate
