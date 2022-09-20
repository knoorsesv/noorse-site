import { GatsbyImage } from 'gatsby-plugin-image'
import { marked } from 'marked'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments } from '../components/attachment-list'
import { ContentfulJsonContent } from '../components/contentful-content'
import Layout, { Container } from '../components/layout'
import {
  createSnippetFromContentArray,
  createSnippetFromInhoud,
} from '../components/snippet'
import { Title } from '../components/titles'
import { imageFileTypes } from '../env/constants'
const NewsTemplate = ({ pageContext: { newsNode } }) => {
  const images = getImageAttachments(newsNode.attachment)
  const newsContentArray = JSON.parse(newsNode.body.raw).content
  return (
    <Layout>
      <Helmet>
        <title>{newsNode.title}</title>
        <meta property="og:title" content={`${newsNode.title}`} />
        <meta
          property="og:description"
          content={`${
            newsNode.blurb ||
            (newsNode.inhoud?.inhoud &&
              createSnippetFromInhoud(newsNode.inhoud?.inhoud)) ||
            createSnippetFromContentArray(newsContentArray)
          }`}
        />
        {newsNode.image && (
          <meta
            property="og:image"
            content={`${newsNode.image.gatsbyImageData.images.fallback.src}`}
          />
        )}
      </Helmet>
      <Container>
        <Title>{newsNode.title}</Title>
        {newsNode.showImageOnPage && newsNode.image && (
          <GatsbyImage
            image={newsNode.image.gatsbyImageData}
            alt={'News Image'} // todo: make alt tag specific
            style={{ maxHeight: '300px' }}
            loading="lazy"
            objectFit={'contain'}
          />
        )}
        <h3 className={'mb-6 mt-6 capitalize italic'}>
          {newsNode.publishDate || newsNode.createdAt}
        </h3>
        {newsNode.inhoud?.inhoud ? (
          <section
            className={'prose'}
            dangerouslySetInnerHTML={{
              __html: marked(newsNode.inhoud?.inhoud),
            }}
          ></section>
        ) : (
          <ContentfulJsonContent content={newsContentArray} />
        )}
        <section className={newsNode.inhoud?.inhoud ? 'prose ' : ''}>
          <Attachments attachments={newsNode.attachment} />
        </section>
        {!!images.length && (
          <Images
            images={images}
            className={
              newsNode.inhoud?.inhoud ? 'lg:px-4 prose' : 'max-w-[90%]'
            }
          />
        )}
      </Container>
    </Layout>
  )
}

const Images = ({ images, className }) => {
  return (
    <div className={`mt-10 flex flex-wrap justify-center gap-x-2 ${className}`}>
      {images.map(NewsImage)}
    </div>
  )
}

const NewsImage = (image) => {
  return (
    <GatsbyImage
      image={image.gatsbyImageData}
      imgClassName={'p-2 '}
      className={'aspect-square max-w-[75%] p-2 medium:max-w-[45%] '}
      loading="lazy"
      objectFit={'contain'}
      key={image.title}
      alt={image.title}
    />
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

export default NewsTemplate
