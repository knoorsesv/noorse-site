import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default ({ pageContext: { categoryNode } }) => {
  return (
    <Layout>
      <h1 className={'title'}>{categoryNode.naam}</h1>
      <div className={'grid grid-cols-3'}>
        <div className={'col-span-1 flex flex-col'}>
          <h2 className={'subtitle'}>Nieuws</h2>
          {categoryNode.news &&
            categoryNode.news.map((news) => (
              <Link key={news.title} to={`/nieuws/${news.title}`}>
                {news.title}
              </Link>
            ))}
        </div>
        <div className={'col-span-2 flex flex-col'}>
          <h2 className={'subtitle'}>Ploegen</h2>
          {categoryNode.ploeg &&
            categoryNode.ploeg.map((ploeg) => (
              <Link key={ploeg.naam} to={`/team/${ploeg.naam.toLowerCase()}`}>
                {ploeg.naam}
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  )
}
