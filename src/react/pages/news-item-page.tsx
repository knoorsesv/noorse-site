import { imageFileTypes } from '../../env/constants.js'

import { format } from 'date-fns'
import { nlBE } from 'date-fns/locale'
import type { FC } from 'react'
import { Helmet } from 'react-helmet'
import { createSnippetFromInhoud } from '../../utils/snippet.ts'
import { ImageWrapper } from '../../wrappers/image-wrapper.tsx'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from '../layout/index.ts'
import type { Attachment } from '../types/attachment'
import type { NewsItem } from '../types/news'

export const NewsItemPage: FC<{ newsItem: NewsItem }> = ({ newsItem }) => {
  const images = getImageAttachments(newsItem.attachment)

  const formattedDate = format(
    newsItem.publishDate || newsItem.createdAt,
    'PPPP',
    {
      locale: nlBE,
    }
  )

  return (
    <>
      <Helmet>
        <title>{newsItem.title}</title>
        <meta property="og:title" content={`${newsItem.title}`} />
        <meta
          property="og:description"
          content={`${
            newsItem.blurb || createSnippetFromInhoud(newsItem.inhoud)
          }`}
        />
        {newsItem.image && (
          <meta
            property="og:image"
            content={`${newsItem.image?.responsiveURL}`}
          />
        )}
      </Helmet>
      <Container>
        <div className="max-w-[600px]">
          <Title>{newsItem.title}</Title>
          {newsItem.showImageOnPage && newsItem.image && (
            <div className="flex w-full justify-center">
              <ImageWrapper
                image={newsItem.image}
                alt={'News'} // todo: make alt tag specific
                className="max-h-[300px] object-contain"
              />
            </div>
          )}
          <h3 className={'mb-6 mt-6 capitalize italic'}>{formattedDate}</h3>
          {newsItem.inhoud && <MarkDown content={newsItem.inhoud} />}
          <section className={newsItem.inhoud ? 'prose' : ''}>
            <Attachments attachments={newsItem.attachment} />
          </section>
          {!!images.length && (
            <Images
              images={images}
              className={newsItem.inhoud ? 'lg:px-4 prose' : 'max-w-[90%]'}
            />
          )}
        </div>
      </Container>
    </>
  )
}

const getImageAttachments = (attachments: Attachment[]) => {
  return (
    !!attachments &&
    attachments.filter(
      (attachment) =>
        attachment.file?.contentType &&
        imageFileTypes.includes(attachment.file?.contentType)
    )
  )
}

const Images: FC<{ images: Attachment[]; className: string }> = ({
  images,
  className,
}) => {
  const NewsImage = (image: Attachment) => {
    return (
      <ImageWrapper
        image={image}
        className={
          'aspect-square max-w-[75%] object-contain p-2 medium:max-w-[45%]'
        }
        loading="lazy"
        key={image.title}
        alt={image.title}
      />
    )
  }

  return (
    <div className={`mt-10 flex flex-wrap justify-center gap-x-2 ${className}`}>
      {images.map(NewsImage)}
    </div>
  )
}
