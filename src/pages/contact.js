import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkDownPage } from '../components/layout'
import Layout from '../layouts/layout'

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

  if (!content) {
    return <Layout>Contact</Layout>
  }

  return (
    <Layout>
      <MarkDownPage title="Contact">{content.body.body}</MarkDownPage>
    </Layout>
  )
}

export default ContactPage
