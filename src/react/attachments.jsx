import React from 'react'
import { imageFileTypes } from '../env/constants'
import { DocumentLink } from './links/document-link.jsx'

export const Attachments = ({ attachments }) => {
  const defaultAttachments = getDefaultAttachments(attachments)

  return defaultAttachments.length ? (
    <>
      <h3 className={'mt-8'}>
        {defaultAttachments.length > 1 ? 'Bijlagen' : 'Bijlage'}
      </h3>
      <ul>
        {defaultAttachments.map((att) => (
          <li key={att.title}>{DocumentLink(att)}</li>
        ))}
      </ul>
    </>
  ) : (
    <></>
  )
}

const getDefaultAttachments = (attachments) => {
  // console.log(attachments)
  return (
    !!attachments &&
    attachments.filter(
      (attachment) => !imageFileTypes.includes(attachment.file.contentType)
    )
  )
}
