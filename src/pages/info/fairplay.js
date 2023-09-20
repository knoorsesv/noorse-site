import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkDownPage } from '../../components/layout'
import Layout from '../../layouts/layout'

const FairplayPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Fairplay" } }) {
        nodes {
          title
          body {
            id
            body
          }
        }
      }
    }
  `)

  const content = data.allContentfulPage.nodes[0]

  if (!content) {
    return <Layout>Fair play</Layout>
  }

  return (
    <MarkDownPage title={content?.title}>{content?.body.body}</MarkDownPage>
  )
}

export default FairplayPage
