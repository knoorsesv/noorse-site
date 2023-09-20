import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MarkDown } from '../components/markdown.jsx'
import Layout from '../layouts/layout'
import { Container } from '../components/layout'

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
          <MarkDown>{content.body.body}</MarkDown>
        ) : (
          <section>Contact</section>
        )}
      </Container>
    </Layout>
  )
}

export default ContactPage
