import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments, MarkDown, Title } from '../../components'
import { Container } from '../../components/layout'
import Layout from '../../layouts/layout'

const LidMaatschapPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Lidmaatschap" } }) {
        nodes {
          title
          body {
            id
            body
          }
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

  // todo: make this a <MarkDownPage />

  return (
    <Layout>
      <Helmet>
        <title>Lid Worden</title>
        <meta property="og:title" content={`Lid Worden`} />
        <meta
          property="og:description"
          content={`Wil je lid worden van één van onze jeugd- of meisjesploegen? Hier vindt je alle info.`}
        />
      </Helmet>
      <Container>
        <Title>Lid Worden</Title>
        {content ? (
          <>
            <MarkDown>{content.body.body}</MarkDown>
            <section className={'prose'}>
              <Attachments attachments={content.attachment} />
            </section>
          </>
        ) : (
          <section>No content</section>
        )}
      </Container>
    </Layout>
  )
}

export default LidMaatschapPage
