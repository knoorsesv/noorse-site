import type { FC } from 'react'
import { imageFileTypes } from '../env/constants.js'
import { DocumentLink } from './links'

interface Attachment {
  title?: string
  file?: {
    contentType: string
    fileName: string
    url: string
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
        {defaultAttachments
          .filter(({ file }) => !!file)
          .map((att) => (
            <li key={att.title}>
              <DocumentLink
                url={att.file?.url as string}
                fileName={att.title || (att.file?.fileName as string)}
              />
            </li>
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
