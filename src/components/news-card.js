import React from 'react'
import { Card, SubHeader } from './cards.jsx'
import {
  createSnippetFromContentArray,
  createSnippetFromInhoud
} from './snippet'

export const NewsCard = ({ newsNode, NewsCardImage }) => {
  const snippet =
    newsNode.blurb ||
    (newsNode.inhoud?.inhoud &&
      createSnippetFromInhoud(newsNode.inhoud?.inhoud)) ||
    createSnippetFromContentArray(JSON.parse(newsNode.body.raw).content)

  return (
    <a href={`/nieuws/${newsNode.title}`}>
      <Card
        header={newsNode.title}
        Image={() => <NewsCardImage image={newsNode.image} />}
        containerClass={'h-[148px]'}
      >
        <SubHeader>
          <div className={'text-left uppercase'}>{newsNode.category.naam}</div>
          <div className={'text-center'}>
            {newsNode.publishDate || newsNode.createdAt}
          </div>
        </SubHeader>
        <div className={'min-h-64p text-center text-gray-dark'}>{snippet}</div>
      </Card>
    </a>
  )
}
