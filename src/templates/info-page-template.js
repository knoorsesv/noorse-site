import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'
import { Helmet } from 'react-helmet'
import { Attachments } from '../components/attachment-list'
import { ContentfulJsonContent } from '../components/contentful-content'
import { createSnippetFromContentArray } from '../components/snippet'

const InfoPage = ({ pageContext: { infoPage } }) => {
  const contentArray = JSON.parse(infoPage.content.raw).content
  return (
    <Layout>
      <Helmet>
        <title>{infoPage.title}</title>
        <meta property="og:title" content={`${infoPage.title}`} />
        <meta
          property="og:description"
          content={`${createSnippetFromContentArray(contentArray)}`}
        />
      </Helmet>
      <Container>
        <Title>{infoPage.title}</Title>
        <ContentfulJsonContent content={contentArray} />
        <section>
          <Attachments attachments={infoPage.attachment} />
        </section>
      </Container>
    </Layout>
  )
}

export default InfoPage
