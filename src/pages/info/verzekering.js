import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkDownPage } from '../../components/layout'
import Layout from '../../layouts/layout'

const VerzekeringPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Verzekering" } }) {
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
    return <Layout>Verzekering</Layout>
  }

  return (
    <Layout>
      <MarkDownPage title={content?.title}>{content?.body.body}</MarkDownPage>
    </Layout>
  )
}

export default VerzekeringPage
