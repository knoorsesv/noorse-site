import type { FC } from 'react'

export const DocumentLink: FC<{ url: string; fileName: string }> = ({
  url,
  fileName,
}) => {
  return (
    <a
      href={url}
      key={url}
      download
      className={'underline'}
      target="_blank"
      rel="noreferrer"
    >
      {fileName}
    </a>
  )
}
