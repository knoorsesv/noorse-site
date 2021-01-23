import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'
import { ExternalLink } from '../components/text'
import Img from 'gatsby-image'

export default ({ pageContext: { newsNode } }) => {
  const defaultAttachments = getDefaultAttachments(newsNode.attachment)
  const images = getImageAttachments(newsNode.attachment)

  function callLoaded() {
    if (process.env.GATSBY_BACKSTOP_READY === 'on') {
      console.log('backstopjs_ready')
    }
  }

  return (
    <Layout>
      <Container>
        <Title>{newsNode.title}</Title>
        {newsNode.showImageOnPage && (
          <Img
            fluid={newsNode.image.fluid}
            alt={'News Image'}
            style={{ maxHeight: '300px' }}
            imgStyle={{ objectFit: 'contain' }}
            onLoad={callLoaded}
          />
        )}
        <h3 className={'italic mb-6 mt-6 capitalize'}>
          {newsNode.publishDate || newsNode.createdAt}
        </h3>
        {newsNode.body.json.content.map(nodeToHtml)}
        {!!defaultAttachments.length && (
          <Attachments attachments={defaultAttachments} />
        )}
        {!!images.length && <Images images={images} />}
      </Container>
    </Layout>
  )
}

const nodeToHtml = (nodeWithType, index) => {
  if (nodeWithType.nodeType === 'paragraph') {
    return (
      <p key={index} className={'my-2'}>
        {nodeWithType.content.map(nodeToHtml)}
      </p>
    )
  }

  if (nodeWithType.nodeType === 'text') {
    return <span key={index}>{nodeWithType.value}</span>
  }

  if (nodeWithType.nodeType === 'unordered-list') {
    return (
      <ul key={index} className={'list-disc list-inside'}>
        {nodeWithType.content.map(nodeToHtml)}
      </ul>
    )
  }

  if (nodeWithType.nodeType === 'list-item') {
    return (
      <li key={index}>{nodeWithType.content[0].content.map(nodeToHtml)}</li>
    )
  }

  if (nodeWithType.nodeType === 'hyperlink') {
    return (
      <ExternalLink url={nodeWithType.data.uri} icon={false}>
        {nodeWithType.content[0].value}
      </ExternalLink>
    )
  }

  if (nodeWithType.nodeType === 'heading-2') {
    return <h2 className={'mt-4'}>{nodeWithType.content[0].value}</h2>
  }

  throw new Error(`Unknown node type, ${nodeWithType.nodeType}`)
}

const Attachments = ({ attachments }) => {
  //todo: this is for all attachment types, to be extended maybe for media galleries or things that can have a preview
  return (
    <React.Fragment>
      <h3 className={'mt-8'}>
        {attachments.length > 1 ? 'Bijlagen' : 'Bijlage'}
      </h3>
      {attachments.map(AttachmentLink)}
    </React.Fragment>
  )
}

const Images = ({ images }) => {
  return (
    <div className={'mt-10 md:max-w-3/4 lg:max-w-1/2'}>
      {images.map(NewsImage)}
    </div>
  )
}
const NewsImage = (image) => {
  return <img key={image.file.url} src={image.file.url} alt={image.title} />
}

const AttachmentLink = (attachment) => {
  return <a href={attachment.title}>{attachment.title}</a>
}

const getDefaultAttachments = (attachments) => {
  return (
    !!attachments &&
    attachments.filter(
      (attachment) => !imageFileTypes.includes(attachment.file.contentType)
    )
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

const imageFileTypes = ['image/jpeg', 'image/png']
