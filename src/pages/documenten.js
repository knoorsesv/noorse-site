import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'
import { graphql, useStaticQuery } from 'gatsby'

const DocumentenPage = () => {
  const documents = useStaticQuery(graphql`
    query {
      allContentfulDocument {
        nodes {
          naam
          document {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container>
        <Title>Documenten</Title>
        <div>
          {documents.allContentfulDocument.nodes.map((documentNode) => {
            return (
              <a
                href={documentNode.document.localFile.publicURL}
                download
                className={'underline'}
              >
                {documentNode.naam}
              </a>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default DocumentenPage
