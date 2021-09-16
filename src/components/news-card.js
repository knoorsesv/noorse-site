import { navigate } from 'gatsby-link'
import React from 'react'
import { ClickableCard, SubHeader } from './cards'
import { createSnippetFromContentArray } from './snippet'
import { graphql, useStaticQuery } from 'gatsby'

export const NewsCard = ({ newsNode }) => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "Logo_highres" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const snippet = createSnippetFromContentArray(
    JSON.parse(newsNode.body.raw).content
  )

  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }
  console.log(newsNode.image)
  return (
    <ClickableCard
      header={newsNode.title}
      image={newsNode.image || images.logo.childImageSharp}
      containerClass={'min-h-128p'}
      onClick={goToNews}
    >
      <SubHeader>
        <div className={'text-left uppercase'}>{newsNode.category.naam}</div>
        <div className={'text-center'}>
          {newsNode.publishDate || newsNode.createdAt}
        </div>
      </SubHeader>
      <div className={'text-center min-h-64p'}>{snippet}</div>
    </ClickableCard>
  )
}
