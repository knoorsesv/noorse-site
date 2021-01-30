import React from 'react'
import { imageFileTypes } from '../env/constants'

export const Attachments = ({ attachments }) => {
  const defaultAttachments = getDefaultAttachments(attachments)

  return defaultAttachments.length ? (
    <React.Fragment>
      <h3 className={'mt-8'}>
        {defaultAttachments.length > 1 ? 'Bijlagen' : 'Bijlage'}
      </h3>
      {defaultAttachments.map(DocumentLink)}
    </React.Fragment>
  ) : null
}

const getDefaultAttachments = (attachments) => {
  return (
    !!attachments &&
    attachments.filter(
      (attachment) => !imageFileTypes.includes(attachment.file.contentType)
    )
  )
}

export const DocumentLink = (documentNode) => {
  if (!documentNode) {
    return <div>Document not found</div>
  }
  return (
    <a
      href={documentNode.file.url}
      key={documentNode.file.url}
      download
      className={'underline'}
    >
      {documentNode.title || documentNode.naam}
    </a>
  )
}
