import React from 'react'

export const DocumentLink = (documentNode) => {
  if (!documentNode) {
    return <div>Document not found</div>
  }
  return (
    <a
      href={documentNode.document.localFile.publicURL}
      download
      className={'underline'}
    >
      {documentNode.naam}
    </a>
  )
}
