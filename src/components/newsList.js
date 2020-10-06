import Masonry from 'react-masonry-css'
import { NewsCard } from './newsCard'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const NewsList = (breakpointColumnsObj) => {
  const newsItems = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          body {
            json
          }
          createdAt(formatString: "DD/MM/YY", locale: "nl-BE")
          publishDate(formatString: "DD/MM/YY", locale: "nl-BE")
          category {
            naam
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  //todo: have a max items property (maybe responsive, might show more on desktop)
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="masonry-column"
    >
      {newsItems.allContentfulNews.nodes.map((node) => (
        <div key={node.title} className={'mb-10p'}>
          <NewsCard newsNode={node} />
        </div>
      ))}
    </Masonry>
  )
}
