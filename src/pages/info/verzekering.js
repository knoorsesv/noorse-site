import { graphql, useStaticQuery } from 'gatsby'
import { marked } from 'marked'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout, { Container } from '../../layouts/layout'

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
      <Helmet>
        <title>{content?.title}</title>
      </Helmet>
      <Container>
        <section
          className={'prose'}
          dangerouslySetInnerHTML={{
            __html: marked(content?.body.body),
          }}
        ></section>
      </Container>
    </Layout>
  )
}

export default VerzekeringPage
