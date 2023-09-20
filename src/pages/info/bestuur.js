import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { BestuurList, SubTitle, Title } from '../../components'
import { Container } from '../../components/layout'
import Layout from '../../layouts/layout'

const query = graphql`
  query {
    allContentfulBestuurslid(sort: { fields: naam }) {
      edges {
        node {
          naam
          email
          title
          type
        }
      }
    }
  }
`

const Bestuur = () => {
  const data = useStaticQuery(query)

  const bestuursLeden = data.allContentfulBestuurslid.edges
    .map(({ node }) => node)
    .filter(({ type }) => type === 'bestuursorgaan')
    .sort((a, b) => {
      if (a.title === 'Voorzitter') return -1
      if (b.title === 'Voorzitter') return 1
      return 0
    })
  const deelwerkingen = data.allContentfulBestuurslid.edges
    .map(({ node }) => node)
    .filter(({ type }) => type === 'deelwerking')

  return (
    <Layout>
      <Helmet>
        <title>Bestuur</title>
      </Helmet>
      <Container centered={false}>
        <Title>Bestuur</Title>
        <SubTitle>Organigram</SubTitle>
        <img
          className="max-w-screen-md medium:w-[800px] medium:max-w-full  m-8"
          alt="Bestuursorganigram"
          src={
            'https://www.mermaidchart.com/raw/8ba49245-d4d8-455f-ad19-50cccfa42034?version=v0.1&theme=light&format=svg'
          }
        />
        <SubTitle>Bestuursorgaan</SubTitle>
        <BestuurList leden={bestuursLeden} />
        <SubTitle>Deelwerkingen</SubTitle>
        <BestuurList leden={deelwerkingen} />
      </Container>
    </Layout>
  )
}

export default Bestuur
