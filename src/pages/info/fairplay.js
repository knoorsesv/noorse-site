import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MarkDown } from '../../components/markdown.jsx'
import { Title } from '../../components/titles.jsx'
import Layout, { Container } from '../../layouts/layout'

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
        <MarkDown>{content?.body.body}</MarkDown>
      </Container>
    </Layout>
  )
}

export default FairplayPage
