import { navigate } from 'gatsby-link'
import React from 'react'
import { ClickableCard, SubHeader } from './cards'
import {
  createSnippetFromContentArray,
  createSnippetFromInhoud,
} from './snippet'
import { graphql, useStaticQuery } from 'gatsby'

export const NewsCard = ({ newsNode, NewsCardImage }) => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "Logo_highres" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, height: 200)
        }
      }
    }
  `)
  const snippet =
    newsNode.blurb ||
    (newsNode.inhoud?.inhoud &&
      createSnippetFromInhoud(newsNode.inhoud?.inhoud)) ||
    createSnippetFromContentArray(JSON.parse(newsNode.body.raw).content)

  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }
  return (
    <ClickableCard
      header={newsNode.title}
      image={newsNode.image || images.logo.childImageSharp}
      Image={() => (
        <NewsCardImage image={newsNode.image || images.logo.childImageSharp} />
      )}
      containerClass={'h-[148px]'}
      onClick={goToNews}
    >
      <SubHeader>
        <div className={'text-left uppercase'}>{newsNode.category.naam}</div>
        <div className={'text-center'}>
          {newsNode.publishDate || newsNode.createdAt}
        </div>
      </SubHeader>
      <div className={'min-h-64p text-center'}>{snippet}</div>
    </ClickableCard>
  )
}
