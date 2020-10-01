import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'
import { List, TextBlock } from '../components/text'
import { DocumentLink } from '../components/documents'
import { graphql, useStaticQuery } from 'gatsby'

const CovidPage = () => {
  const document = useStaticQuery(graphql`
    query {
      allContentfulDocument(filter: { naam: { eq: "Draaiboek COVID" } }) {
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
  console.log(document)
  return (
    <Layout>
      <Container>
        <Title>COVID-19 Regels</Title>
        <TextBlock>
          Hieronder vindt u de belangrijkste maatregelen die Noorse treft i.v.m.
          het COVID-19 virus:
        </TextBlock>
        <TextBlock>
          <List>
            <li>
              {' '}
              Verplichte registratie van toeschouwers bij aankomst op de club.
            </li>
            <li>
              {' '}
              Mondmaskers zijn verplicht naast de velden, in het
              kleedkamergebouw en in de kantine voor +12-jarigen (tenzij zittend
              aan een tafel).
            </li>
            <li> Douchen is niet mogelijk.</li>
            <li>
              {' '}
              Kleedkamers worden enkel gebruikt om zakken weg te zetten en even
              op te frissen na de match.
            </li>
            <li>
              {' '}
              Er is een maximumcapaciteit per kleedkamer (8 spelers). Bij
              voorkeur geen ouders in de kleedkamers.
            </li>
            <li>
              {' '}
              Spelers komen zoveel mogelijk aangekleed naar de wedstrijden.
            </li>
            <li>
              {' '}
              De kantine is geopend onder de horeca regels (meer info in
              bijgevoegd draaiboek).
            </li>
          </List>
        </TextBlock>
        <TextBlock>
          {DocumentLink(document.allContentfulDocument.nodes[0])}
        </TextBlock>
      </Container>
    </Layout>
  )
}

export default CovidPage
