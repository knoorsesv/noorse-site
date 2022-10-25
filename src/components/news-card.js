import React from 'react'
import { ClickableCard, SubHeader } from './cards'
import {
  createSnippetFromContentArray,
  createSnippetFromInhoud,
} from './snippet'

export const NewsCard = ({ newsNode, NewsCardImage, onClick }) => {
  const snippet =
    newsNode.blurb ||
    (newsNode.inhoud?.inhoud &&
      createSnippetFromInhoud(newsNode.inhoud?.inhoud)) ||
    createSnippetFromContentArray(JSON.parse(newsNode.body.raw).content)

  return (
    <ClickableCard
      header={newsNode.title}
      Image={() => <NewsCardImage image={newsNode.image} />}
      containerClass={'h-[148px]'}
      onClick={() => onClick(newsNode)}
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
