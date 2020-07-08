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
    //take first content of first item because that is always a paragraph
    return (
      <li key={index}>{nodeWithType.content[0].content.map(nodeToHtml)}</li>
    )
  }

  return <span key={index}>{nodeWithType.nodeType}</span>
}

export default ({ pageContext: { newsNode } }) => (
  <Layout>
    <Container>
      {/*<nav className={'flex flex-row'}>*/}
      {/*  <span className={' mr-1'}>Nieuws</span>*/}
      {/*  {newsNode.category && (*/}
      {/*    <span className={'mx-2'}>/ {newsNode.category.naam}</span>*/}
      {/*  )}*/}
      {/*</nav>*/}
      <Title>{newsNode.title}</Title>
      <h3 className={'italic mb-6 capitalize'}>{newsNode.createdAt}</h3>
      {newsNode.body.json.content.map(nodeToHtml)}
    </Container>
  </Layout>
)
