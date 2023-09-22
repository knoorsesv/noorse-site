import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { InfoLidmaatschapPage } from '../../components/pages'
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

  if (!content) {
    return <Layout>Lidmaatschap</Layout>
  }

  return (
    <Layout>
      <InfoLidmaatschapPage content={content} />
    </Layout>
  )
}

export default LidMaatschapPage
