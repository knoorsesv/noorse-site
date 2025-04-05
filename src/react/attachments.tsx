import type { FC } from 'react'
import { imageFileTypes } from '../env/constants.js'
import { DocumentLink } from './links/document-link.jsx'

interface Attachment {
  title?: string
  file?: {
    contentType: string
  }
}

export const Attachments: FC<{ attachments: Attachment[] }> = ({
  attachments,
}) => {
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

const getDefaultAttachments = (attachments: Attachment[]) => {
  return attachments
    ? attachments.filter(
        (attachment) =>
          attachment.file &&
          !imageFileTypes.includes(attachment.file.contentType)
      )
    : []
}
