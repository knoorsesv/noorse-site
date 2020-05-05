import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

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
    <div className={'flex flex-col items-center'}>
      <div className={'md:px-12 md:my-5 lg:w-3/5'}>
        <nav className={'breadcrumb'}>
          <ul>
            <li>
              <Link to={'/nieuws'}>News</Link>
            </li>
            <li>
              <Link to={'/nieuws'}>Senioren (shoudl be dynamis)</Link>
            </li>
          </ul>
        </nav>
        <h1 className={'uppercase title'}>{newsNode.title}</h1>
        <h3 className={'subtitle'}>{newsNode.updatedAt}</h3>
        {newsNode.body.json.content.map(nodeToHtml)}
      </div>
    </div>
  </Layout>
)
