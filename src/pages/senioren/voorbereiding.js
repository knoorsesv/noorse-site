import { graphql, useStaticQuery } from 'gatsby'
import Layout, { Container } from '../../components/layout'
import { Helmet } from 'react-helmet'
import { Title } from '../../components/titles'
import React from 'react'
import { TextBlock } from '../../components/text'

const SeniorenVoorbereiding = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "Voorbereiding_seizoen_2021-2022" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <title>Voorbereiding Senioren 2021-2022</title>
      </Helmet>
      <Container>
        <Title>Voorbereiding Senioren 2021-2022</Title>
        <TextBlock>
          {data.allFile.edges.length ? (
            <a href={data.allFile.edges[0].node.publicURL} download>
              Voorbereiding Senioren Seizoen 2021-2022
            </a>
          ) : (
            <></>
          )}
        </TextBlock>
      </Container>
    </Layout>
  )
}

export default SeniorenVoorbereiding
