import { graphql, useStaticQuery } from 'gatsby'
import { marked } from 'marked'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout, { Container } from '../../components/layout'
import { Title } from '../../components/titles'

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
    <Layout>
      <Helmet>
        <title>{content?.title}</title>
      </Helmet>
      <Container>
        <Title>{content?.title}</Title>
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

export default FairplayPage
