import React from 'react'
import { Helmet } from 'react-helmet'
import Layout, { Container } from '../layouts/layout'
import { marked } from 'marked'
import { graphql, useStaticQuery } from 'gatsby'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage(filter: { title: { eq: "Contact" } }) {
        nodes {
          body {
            id
            body
          }
        }
      }
    }
  `)

  const content = data.allContentfulPage.nodes[0]

  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        {content ? (
          <section
            className={'prose'}
            dangerouslySetInnerHTML={{
              __html: marked(content.body.body),
            }}
          ></section>
        ) : (
          <section>Contact</section>
        )}
      </Container>
    </Layout>
  )
}

export default ContactPage
