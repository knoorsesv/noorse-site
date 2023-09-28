import React from 'react'
import { NewsPage } from '../../components/pages'
import Layout from '../../layouts/layout'
import { getNewsItems } from '../../queries/news'

const Nieuws = () => {
  return (
    <Layout>
      <NewsPage newsItems={getNewsItems()} />
    </Layout>
  )
}

export default Nieuws
