import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments } from '../../components/attachments.jsx'
import { MarkDown } from '../../components/markdown.jsx'
import { Title } from '../../components/titles.jsx'
import Layout, { Container } from '../../layouts/layout'

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

  return (
    <Layout>
      <Helmet>
        <title>{content.title}</title>
      </Helmet>
      <Container>
        <Title>{content.title}</Title>
        <MarkDown>{content.body.body}</MarkDown>
        <section className={'prose'}>
          <Attachments attachments={content.attachment} />
        </section>
      </Container>
    </Layout>
  )
}

export default SponsoringPage
