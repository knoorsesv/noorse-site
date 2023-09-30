import React from 'react'

// todo: this input should not be a node, just an object with url and name
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
      target="_blank"
      rel="noreferrer"
    >
      {documentNode.title || documentNode.file.fileName}
    </a>
  )
}
