import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments } from '../components/attachments.jsx'
import { MarkDown } from '../components/markdown.jsx'
import { createSnippetFromInhoud } from '../utils/snippet.js'
import { Title } from '../components/titles.jsx'
import { imageFileTypes } from '../env/constants'
import Layout, { Container } from '../layouts/layout'

const NewsTemplate = ({ pageContext: { newsNode } }) => {
  const images = getImageAttachments(newsNode.attachment)
  return (
    <Layout>
      <Helmet>
        <title>{newsNode.title}</title>
        <meta property="og:title" content={`${newsNode.title}`} />
        <meta
          property="og:description"
          content={`${
            newsNode.blurb || createSnippetFromInhoud(newsNode.inhoud?.inhoud)
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
            alt={'News'} // todo: make alt tag specific
            style={{ maxHeight: '300px' }}
            objectFit={'contain'}
          />
        )}
        <h3 className={'mb-6 mt-6 capitalize italic'}>
          {newsNode.publishDate || newsNode.createdAt}
        </h3>
        {newsNode.inhoud?.inhoud && (
          <MarkDown>{newsNode.inhoud?.inhoud}</MarkDown>
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
