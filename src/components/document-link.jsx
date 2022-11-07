import React from 'react'

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
