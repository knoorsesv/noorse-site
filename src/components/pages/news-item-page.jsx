import React from 'react'
import { imageFileTypes } from '../../env/constants'

import { Helmet } from 'react-helmet'
import { createSnippetFromInhoud } from '../../utils/snippet.js'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from '../layout'
import { ImageWrapper } from '../../wrappers/image-wrapper.jsx'

export const NewsItemPage = ({ newsItem }) => {
  const images = getImageAttachments(newsItem.attachment)
  return (
    <>
      <Helmet>
        <title>{newsItem.title}</title>
        <meta property="og:title" content={`${newsItem.title}`} />
        <meta
          property="og:description"
          content={`${
            newsItem.blurb || createSnippetFromInhoud(newsItem.inhoud?.inhoud)
          }`}
        />
        {newsItem.image?.images?.length > 0 && (
          <meta
            property="og:image"
            content={`${newsItem.image?.images?.fallback.src}`}
          />
        )}
      </Helmet>
      <Container>
        <Title>{newsItem.title}</Title>
        {newsItem.showImageOnPage && newsItem.image && (
          <ImageWrapper
            image={newsItem.image}
            alt={'News'} // todo: make alt tag specific
            style={{ maxHeight: '300px' }}
            objectFit={'contain'}
          />
        )}
        <h3 className={'mb-6 mt-6 capitalize italic'}>
          {newsItem.publishDate || newsItem.createdAt}
        </h3>
        {newsItem.inhoud?.inhoud && (
          <MarkDown>{newsItem.inhoud?.inhoud}</MarkDown>
        )}
        <section className={newsItem.inhoud?.inhoud ? 'prose ' : ''}>
          <Attachments attachments={newsItem.attachment} />
        </section>
        {!!images.length && (
          <Images
            images={images}
            className={
              newsItem.inhoud?.inhoud ? 'lg:px-4 prose' : 'max-w-[90%]'
            }
          />
        )}
      </Container>
    </>
  )
}

const getImageAttachments = (attachments) => {
  return (
    !!attachments &&
    attachments.filter((attachment) =>
      imageFileTypes.includes(attachment.file.contentType)
    )
  )
}

const Images = ({ images, className }) => {
  const NewsImage = (image) => {
    return (
      <ImageWrapper
        image={image}
        imgClassName={'p-2'}
        className={'aspect-square max-w-[75%] p-2 medium:max-w-[45%] '}
        loading="lazy"
        objectfit={'contain'}
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
