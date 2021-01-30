import { navigate } from 'gatsby-link'
import React from 'react'
import { ClickableCard, SubHeader } from './cards'
import { createSnippetFromContentArray } from './snippet'

export const NewsCard = ({ newsNode }) => {
  const snippet = createSnippetFromContentArray(newsNode.body.json.content)

  const goToNews = () => {
    navigate(`/nieuws/${newsNode.title}`)
  }

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
