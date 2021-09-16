import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { ContentfulJsonContent } from '../components/contentful-content'
import { createSnippetFromContentArray } from '../components/snippet'
import { Attachments } from '../components/attachment-list'
import { imageFileTypes } from '../env/constants'

const NewsTemplate = ({ pageContext: { newsNode } }) => {
  const images = getImageAttachments(newsNode.attachment)
  const newsContentArray = JSON.parse(newsNode.body.raw).content

  function callLoaded() {
    if (process.env.GATSBY_BACKSTOP_READY === 'on') {
      console.log('backstopjs_ready')
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>{newsNode.title}</title>
        <meta property="og:title" content={`${newsNode.title}`} />
        <meta
          property="og:description"
          content={`${createSnippetFromContentArray(newsContentArray)}`}
        />
        $
        {newsNode.image && (
          <meta
            property="og:image"
            content={`https:${newsNode.image.gatsbyImageData.images.fallback.src}`}
          />
        )}
      </Helmet>
      <Container>
        <Title>{newsNode.title}</Title>
        {newsNode.showImageOnPage && (
          <GatsbyImage
            image={newsNode.image.gatsbyImageData}
            alt={'News Image'}
            style={{ maxHeight: '300px' }}
            objectFit={'contain'}
            onLoad={callLoaded}
          />
        )}
        <h3 className={'italic mb-6 mt-6 capitalize'}>
          {newsNode.publishDate || newsNode.createdAt}
        </h3>
        <ContentfulJsonContent content={newsContentArray} />
        <Attachments attachments={newsNode.attachment} />
        {!!images.length && <Images images={images} />}
      </Container>
    </Layout>
  )
}

const Images = ({ images }) => {
  return (
    <div className={'mt-10 md:max-w-[75%] lg:max-w-1/2'}>
      {images.map(NewsImage)}
    </div>
  )
}
const NewsImage = (image) => {
  //todo: make this a gatsby image
  return <img key={image.file.url} src={image.file.url} alt={image.title} />
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
