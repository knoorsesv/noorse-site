import React from 'react'
import { imageFileTypes } from '../../env/constants'

import { Helmet } from 'react-helmet'
import { createSnippetFromInhoud } from '../../utils/snippet.js'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from '../layout'
import { ImageWrapper } from '../../wrappers/image-wrapper'

export const NewsItemPage = ({ newsItem }) => {
  const images = getImageAttachments(newsItem.attachment)

  // console.log('newsItem', newsItem)
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
          <div className="flex w-full justify-center">
            <ImageWrapper
              image={newsItem.image}
              alt={'News'} // todo: make alt tag specific
              className="max-h-[300px] object-contain "
            />
          </div>
        )}
        <h3 className={'mb-6 mt-6 capitalize italic'}>
          {newsItem.publishDate || newsItem.createdAt}
        </h3>
        {newsItem.inhoud && <MarkDown>{newsItem.inhoud}</MarkDown>}
        <section className={newsItem.inhoud ? 'prose ' : ''}>
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
    // todo: check if this separate imgClassName is necessary
    return (
      <ImageWrapper
        image={image}
        className={
          'aspect-square max-w-[75%] object-contain p-2 medium:max-w-[45%] '
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
