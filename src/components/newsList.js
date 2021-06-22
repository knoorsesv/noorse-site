import Masonry from 'react-masonry-css'
import { NewsCard } from './news-card'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const NewsList = (breakpointColumnsObj) => {
  const newsItems = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { fields: createdAt, order: DESC }) {
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
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `)

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="masonry-column"
    >
      {newsItems.allContentfulNews.nodes.map((node) => (
        <div key={node.title} className={'mb-[10px]'}>
          <NewsCard newsNode={node} />
        </div>
      ))}
    </Masonry>
  )
}
