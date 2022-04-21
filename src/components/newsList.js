import { NewsCard } from './news-card'
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export const NewsList = ({ maxItems }) => {
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
          blurb
          image {
            gatsbyImageData(layout: CONSTRAINED, height: 200)
          }
        }
      }
    }
  `)
  const shownNewsItems = !!maxItems
    ? newsItems.allContentfulNews.nodes.slice(0, maxItems)
    : newsItems.allContentfulNews.nodes
  return (
    <section className={'flex flex-col flex-wrap medium:flex-row'}>
      {shownNewsItems.map((node) => (
        <div key={node.title} className={'mb-[10px] medium:w-1/2 medium:px-2'}>
          <NewsCard newsNode={node} />
        </div>
      ))}
      <div className={'my-4 flex w-full justify-center text-xl'}>
        {!!maxItems ? (
          <Link className={'font-bold text-black'} to={'info/nieuws'}>
            ...
          </Link>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}
