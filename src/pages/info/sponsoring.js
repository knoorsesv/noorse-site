import { graphql, useStaticQuery } from 'gatsby'
import { marked } from 'marked'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments } from '../../components/attachment-list'
import Layout, { Container } from '../../components/layout'
import { Title } from '../../components/titles'

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
            }
            title
            localFile {
              url
            }
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
        <section
          className={'prose'}
          dangerouslySetInnerHTML={{
            __html: marked(content.body.body),
          }}
        ></section>
        <section className={'prose'}>
          <Attachments attachments={content.attachment} />
        </section>
      </Container>
    </Layout>
  )
}

export default SponsoringPage
