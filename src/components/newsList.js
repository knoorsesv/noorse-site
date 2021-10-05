import { NewsCard } from './news-card'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const NewsList = () => {
  const newsItems = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { fields: createdAt, order: DESC }, limit: 8) {
        nodes {
          title
          body {
            raw
          }
          createdAt(formatString: "DD/MM/YY", locale: "nl-BE")
          publishDate(formatString: "DD/MM/YY", locale: "nl-BE")
          category {
            naam
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, height: 200)
          }
        }
      }
    }
  `)

  return (
    <section className={'flex flex-col sm:flex-row flex-wrap'}>
      {newsItems.allContentfulNews.nodes.map((node) => (
        <div key={node.title} className={'mb-[10px] sm:w-1/2 sm:px-2'}>
          <NewsCard newsNode={node} />
        </div>
      ))}
    </section>
  )
}
