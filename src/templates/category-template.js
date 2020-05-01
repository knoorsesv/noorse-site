import React from 'react'
import Layout from '../components/layout'

export default ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <h1 className={'title'}>{categoryNode.naam}</h1>
      <div className={'grid grid-cols-3'}>
        <div className={'col-span-1'}>
          <h2 className={'subtitle'}>Nieuws</h2>
          {categoryNode.news.map((news) => news.title)}
        </div>
        <div className={'col-span-2'}>
          <h2 className={'subtitle'}>Ploegen</h2>
        </div>
      </div>
    </Layout>
  )
}
