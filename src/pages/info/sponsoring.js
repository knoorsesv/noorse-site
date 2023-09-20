import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments, MarkDown, Title } from '../../components'
import { Container } from '../../components/layout'
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
