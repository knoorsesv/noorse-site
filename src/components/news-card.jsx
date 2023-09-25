import React from 'react'
import { Card, SubHeader } from './cards.jsx'
import { createSnippetFromInhoud } from '../utils/snippet.js'
import { ImageWrapper } from '../wrappers/image.jsx'

// todo: this input should not be called node, props shoule be mapped before coming in here
export const NewsCard = ({ newsNode, fallBackLogo }) => {
  const snippet =
    newsNode.blurb || createSnippetFromInhoud(newsNode.inhoud?.inhoud)
  const NewsCardImage = ({ image }) => {
    return (
      <div className={'h-[200px] text-center'}>
        <ImageWrapper
          image={image?.gatsbyImageData || fallBackLogo.gatsbyImageData}
          alt={'Card Header'}
        />
      </div>
    )
  }

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
