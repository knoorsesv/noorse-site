import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { NewsPage } from '../../components/pages'
import Layout from '../../layouts/layout'
import { getConstrainedLogoData } from '../../queries/constrained-logo'
import { getNewsItems } from '../../queries/news'

const Nieuws = () => {
  return (
    <Layout>
      <NewsPage
        newsItems={getNewsItems()}
        Image={GatsbyImage}
        fallBackLogo={getConstrainedLogoData()}
      />
    </Layout>
  )
}

export default Nieuws
