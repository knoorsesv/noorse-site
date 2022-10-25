import { graphql, useStaticQuery } from 'gatsby'

export const getNewsItems = (maxItems) => {
  const newsItems = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          inhoud {
            inhoud
          }
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

  return maxItems
    ? newsItems.allContentfulNews.nodes.slice(0, maxItems)
    : newsItems.allContentfulNews.nodes
}
