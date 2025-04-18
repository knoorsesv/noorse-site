import { Card, SubHeader } from './cards.tsx'
import { createSnippetFromInhoud } from '../utils/snippet.ts'
import { ImageWrapper } from '../wrappers/image-wrapper.tsx'
import { Logo } from './logo.js'
import { format } from 'date-fns'
import type { FC } from 'react'
import type { NewsItem } from './types/news'
import type { Image } from './types/image'

export const NewsCard: FC<{ newsItem: NewsItem; image: Image }> = ({
  newsItem,
  image,
}) => {
  const snippet = newsItem.blurb || createSnippetFromInhoud(newsItem.inhoud)
  const dateToShow = newsItem.publishDate || newsItem.createdAt

  const NewsCardImage: FC<{ image: Image; srcSet?: string }> = ({
    image,
    srcSet,
  }) => {
    return (
      <div className={'h-[200px] text-center'}>
        {image ? (
          <ImageWrapper
            image={image}
            srcSet={srcSet}
            className="aspect-auto h-full w-auto"
            height="200"
            alt={'Card Header'} // todo: this is not meaningful alt text about what is in the image
          />
        ) : (
          <Logo height="100%" width="100%" />
        )}
      </div>
    )
  }

  return (
    <a href={`/nieuws/${newsItem.title.replace('/', '-').toLowerCase()}`}>
      <Card
        header={newsItem.title}
        Image={() => <NewsCardImage image={image} srcSet={newsItem.srcSet} />}
        containerClass={'h-[148px]'}
      >
        <SubHeader>
          <div className={'text-left uppercase'}>{newsItem.category.naam}</div>
          <div className={'text-center'}>
            {dateToShow && format(new Date(dateToShow), 'dd/MM/yy')}
          </div>
        </SubHeader>
        <div className={'min-h-64p text-center text-gray-dark'}>{snippet}</div>
      </Card>
    </a>
  )
}
