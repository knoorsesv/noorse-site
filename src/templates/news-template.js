import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'

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

  throw new Error(`Unknown node type, ${nodeWithType}`)
}

const Attachments = ({ attachments }) => {
  //todo: this is for all attachment types, to be extended maybe for media galleries or things that can have a preview
  return (
    <React.Fragment>
      <h3 className={'mt-8'}>
        {attachments.lenght > 1 ? 'Bijlagen' : 'Bijlage'}
      </h3>
      {attachments.map(AttachmentLink)}
    </React.Fragment>
  )
}

const AttachmentLink = (attachment) => {
  return <a href={attachment.file.url}>{attachment.title}</a>
}

export default ({ pageContext: { newsNode } }) => {
  return (
    <Layout>
      <Container centered={false}>
        <Title>{newsNode.title}</Title>
        <h3 className={'italic mb-6 capitalize'}>{newsNode.createdAt}</h3>
        {newsNode.body.json.content.map(nodeToHtml)}
        {!!newsNode.attachment && (
          <Attachments attachments={newsNode.attachment} />
        )}
      </Container>
    </Layout>
  )
}
