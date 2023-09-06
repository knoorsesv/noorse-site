import { graphql, useStaticQuery } from 'gatsby'
import { marked } from 'marked'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Attachments } from '../../components/attachments.jsx'
import Layout, { Container } from '../../layouts/layout'
import { Title } from '../../components/titles.jsx'

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
            <section
              className={'prose'}
              dangerouslySetInnerHTML={{
                __html: marked(content.body.body),
              }}
            ></section>
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
