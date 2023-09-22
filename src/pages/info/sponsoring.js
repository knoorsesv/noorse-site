import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkDownPage } from '../../components/layout'
import Layout from '../../layouts/layout'

const SponsoringPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Sponsoring" } }) {
        nodes {
          body {
            id
            body
          }
          title
          attachment {
            file {
              contentType
              url
            }
            title
          }
        }
      }
    }
  `)

  const content = data.allContentfulPage.nodes[0]

  if (!content) {
    return <Layout>Sponsoring</Layout>
  }

  return (
    <Layout>
      <MarkDownPage title={content?.title} attachment={content?.attachment}>
        {content?.body.body}
      </MarkDownPage>
    </Layout>
  )
}

export default SponsoringPage
