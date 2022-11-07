import React from 'react'
import Layout, { Container } from '../../layouts/layout'
import { Title } from '../../components/titles'
import { graphql, useStaticQuery } from 'gatsby'
import { DocumentLink } from '../../components/document-link.jsx'
import { Helmet } from 'react-helmet'

const DocumentenPage = () => {
  const documents = useStaticQuery(graphql`
    query {
      allContentfulDocument {
        nodes {
          naam
          document {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <title>Documenten</title>
      </Helmet>
      <Container>
        <Title>Documenten</Title>
        <ul>
          {documents.allContentfulDocument.nodes.map((node) => (
            <li key={node.naam}>
              {node.naam} - {DocumentLink(node.document)}
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default DocumentenPage
