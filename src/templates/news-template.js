import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const nodeToHtml = (nodeWithType) => {
  if (nodeWithType.nodeType === 'paragraph') {
    return <p className={'my-2'}>{nodeWithType.content.map(nodeToHtml)}</p>
  }

  if (nodeWithType.nodeType === 'text') {
    return <span>{nodeWithType.value}</span>
  }
  if (nodeWithType.nodeType === 'unordered-list') {
    return <ul className={'list-disc list-inside'}>{nodeWithType.content.map(nodeToHtml)}</ul>
  }

  if (nodeWithType.nodeType === 'list-item') {
    //take first content of first item because that is always a paragraph
    return <li>{nodeWithType.content[0].content.map(nodeToHtml)}</li>
  }

  return <span>{nodeWithType.nodeType}</span>
}


export default ({ pageContext: { newsNode } }) => (
  <Layout>
    <div className={'px-12 my-5'}>
      <nav className={'breadcrumb'}>
        <ul>
          <li><Link to={'nieuws'}>News</Link></li>
          <li><Link to={'nieuws'}>Senioren (shoudl be dynamis)</Link></li>
        </ul>
      </nav>
      <h1 className={'uppercase title'}>{newsNode.title}</h1>
      <h3 className={'subtitle'}>{newsNode.updatedAt}</h3>
      {newsNode.body.json.content.map(nodeToHtml)}
    </div>
  </Layout>
)