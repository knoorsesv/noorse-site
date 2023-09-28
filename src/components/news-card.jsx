import React from 'react'
import { Card, SubHeader } from './cards.jsx'
import { createSnippetFromInhoud } from '../utils/snippet.js'
import { ImageWrapper } from '../wrappers/image-wrapper.jsx'
import { Logo } from './logo.jsx'

export const NewsCard = ({ newsItem, image }) => {
  const snippet =
    newsItem.blurb || createSnippetFromInhoud(newsItem.inhoud?.inhoud)

  const NewsCardImage = ({ image }) => {
    return (
      <div className={'h-[200px] text-center'}>
        {image ? (
          <ImageWrapper
            image={image}
            alt={'Card Header'} // todo: this is not meaningful alt text about what is in the image
          />
        ) : (
          <Logo height="100%" width="100%" />
        )}
      </div>
    )
  }

  return (
    <a href={`/nieuws/${newsItem.title}`}>
      <Card
        header={newsItem.title}
        Image={() => <NewsCardImage image={image} />}
        containerClass={'h-[148px]'}
      >
        <SubHeader>
          <div className={'text-left uppercase'}>{newsItem.category.naam}</div>
          <div className={'text-center'}>
            {/* todo: correct formatting should happen in here */}
            {newsItem.publishDate || newsItem.createdAt}
          </div>
        </SubHeader>
        <div className={'min-h-64p text-center text-gray-dark'}>{snippet}</div>
      </Card>
    </a>
  )
}
