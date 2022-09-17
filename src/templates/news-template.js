import { GatsbyImage } from 'gatsby-plugin-image'
import { marked } from 'marked'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments } from '../components/attachment-list'
import Layout, { Container } from '../components/layout'
import { createSnippetFromContentArray } from '../components/snippet'
import { imageFileTypes } from '../env/constants'
const NewsTemplate = ({ pageContext: { newsNode } }) => {
  const images = getImageAttachments(newsNode.attachment)
  const newsContentArray = JSON.parse(newsNode.body.raw).content

  return (
    <Layout>
      <Helmet>
        <title>{newsNode.title}</title>
        <meta property="og:title" content={`${newsNode.title}`} />
        {/* todo: extract blurb from markdown inhoud*/}
        <meta
          property="og:description"
          content={`${
            newsNode.blurb || createSnippetFromContentArray(newsContentArray)
          }`}
        />
        {newsNode.image && (
          <meta
            property="og:image"
            content={`${newsNode.image.gatsbyImageData.images.fallback.src}`}
          />
        )}
      </Helmet>
      <Container className={newsNode.inhoud?.inhoud && 'prose'}>
        <h1>{newsNode.title}</h1>
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
            dangerouslySetInnerHTML={{ __html: marked(newsNode.inhoud.inhoud) }}
          ></section>
        ) : (
          <ContentfulJsonContent content={newsContentArray} />
        )}
        <Attachments attachments={newsNode.attachment} />
        {!!images.length && <Images images={images} />}
      </Container>
    </Layout>
  )
}

const Images = ({ images }) => {
  return (
    <div className={' mt-10 flex max-w-[90%] flex-wrap justify-center gap-x-2'}>
      {images.map(NewsImage)}
    </div>
  )
}

const NewsImage = (image) => {
  return (
    <GatsbyImage
      image={image.gatsbyImageData}
      imgClassName={'p-2 '}
      className={
        'aspect-square max-w-[75%] p-2 medium:max-w-[45%] large:max-w-[32%]'
      }
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
