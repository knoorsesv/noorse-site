import { navigate } from 'gatsby-link'
import React from 'react'
import { ClickableCard, SubHeader } from './cards'
import { createSnippetFromContentArray } from './snippet'

export const NewsCard = ({ newsNode }) => {
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
      image={newsNode.image}
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
