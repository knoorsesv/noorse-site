import { Card, SubHeader } from './cards.jsx'
import { createSnippetFromInhoud } from '../utils/snippet.js'
import { ImageWrapper } from '../wrappers/image-wrapper'
import { Logo } from './logo.jsx'
import { format } from 'date-fns'

export const NewsCard = ({ newsItem, image }) => {
  const snippet = newsItem.blurb || createSnippetFromInhoud(newsItem.inhoud)
  const dateToShow = newsItem.publishDate || newsItem.createdAt

  const NewsCardImage = ({ image }) => {
    return (
      <div className={'h-[200px] text-center'}>
        {image ? (
          <ImageWrapper
            image={image}
            className={'h-full'}
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
        Image={() => <NewsCardImage image={image} />}
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
