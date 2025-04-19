import { imageFileTypes } from '../../env/constants'

import { Helmet } from 'react-helmet'
import { createSnippetFromInhoud } from '../../utils/snippet.ts'
import { Attachments, MarkDown, Title } from '../index'
import { Container } from '../layout'
import { ImageWrapper } from '../../wrappers/image-wrapper'
import { format } from 'date-fns'
import { nlBE } from 'date-fns/locale'

export const NewsItemPage = ({ newsItem }) => {
  const images = getImageAttachments(newsItem.attachment)

  const formattedDate = format(
    new Date(newsItem.publishDate || newsItem.createdAt),
    'PPPP',
    { locale: nlBE }
  )
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
        <div className="max-w-[600px]">
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
          <h3 className={'mb-6 mt-6 capitalize italic'}>{formattedDate}</h3>
          {newsItem.inhoud && <MarkDown content={newsItem.inhoud} />}
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
        </div>
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
