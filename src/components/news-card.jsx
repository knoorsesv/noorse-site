import React from 'react'
import { Card, SubHeader } from './cards.jsx'
import { createSnippetFromInhoud } from '../utils/snippet.js'

// todo: this input should not be called node, props shoule be mapped before coming in here
export const NewsCard = ({ newsNode, NewsCardImage }) => {
  const snippet =
    newsNode.blurb || createSnippetFromInhoud(newsNode.inhoud?.inhoud)

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
            {/* todo: correct formatting should happen in here */}
            {newsNode.publishDate || newsNode.createdAt}
          </div>
        </SubHeader>
        <div className={'min-h-64p text-center text-gray-dark'}>{snippet}</div>
      </Card>
    </a>
  )
}
