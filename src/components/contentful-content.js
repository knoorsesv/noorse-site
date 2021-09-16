import { ExternalLink } from './text'
import React from 'react'

export const ContentfulJsonContent = ({ content: contentArray }) => {
  return contentArray.map(node)
}

const node = (nodeWithType, index) => {
  if (nodeWithType.nodeType === 'paragraph') {
    return (
      <p key={index} className={'my-2'}>
        {nodeWithType.content.map(node)}
      </p>
    )
  }

  if (nodeWithType.nodeType === 'text') {
    return <span key={index}>{nodeWithType.value}</span>
  }

  if (nodeWithType.nodeType === 'unordered-list') {
    return (
      <ul key={index} className={'list-disc list-inside'}>
        {nodeWithType.content.map(node)}
      </ul>
    )
  }

  if (nodeWithType.nodeType === 'list-item') {
    return <li key={index}>{nodeWithType.content[0].content.map(node)}</li>
  }

  if (nodeWithType.nodeType === 'hyperlink') {
    return (
      <ExternalLink url={nodeWithType.data.uri} icon={false} key={index}>
        {nodeWithType.content[0].value}
      </ExternalLink>
    )
  }

  if (nodeWithType.nodeType === 'heading-2') {
    return <h2 className={'mt-4'}>{nodeWithType.content[0].value}</h2>
  }

  throw new Error(`Unknown node type, ${nodeWithType.nodeType}`)
}
