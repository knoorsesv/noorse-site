import React from 'react'
import Layout, { Container } from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { List, SpacedInfo, TextBlock } from '../components/text'
import { graphql, useStaticQuery } from 'gatsby'

const SponsoringPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "SponsoringNoorse-20192020" } }) {
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
      <Container>
        <Title>Sponsoring</Title>
        <SubTitle>Huidige Partners</SubTitle>
        <TextBlock>Nog nodig aangezien ze in de footer staan?</TextBlock>
        <SubTitle> Waarom Sponsoren?</SubTitle>
        <TextBlock>
          Deze club is in enkele jaren aanzienlijk gegroeid tot een vereniging
          met ongeveer 650 actieve sportbeoefenaars.
          <br />
          Dit vraagt natuurlijk de nodige fondsen om een comfortabele
          infrastructuur, het nodige materiaal, enz. te verkrijgen. Daarbij
          hebben wij u nodig.
        </TextBlock>
        <TextBlock>
          <a href={data.allFile.edges[0].node.publicURL} download>
            Sponsor brochure
          </a>
        </TextBlock>
        <TextBlock>
          <div className={'mb-3'}>
            Enkele goede redenen om sponsor bij Noorse te worden:
          </div>
          <List>
            <li>
              {' '}
              Elk weekend bereikt u vele potentiële klanten, zowel in de
              gemeente Kapellen als in heel de provincie Antwerpen. U bereikt
              wekelijks onze spelers, hun ouders, broers en zussen, grootouders,
              …
            </li>
            <li>
              {' '}
              U heeft meerdere sponsormogelijkheden: Van het schenken van een
              wedstrijdbal tot het sponsoren van een sportuitrusting,
              trainingspakken of regenjassen voor een ploeg, uw logo op
              A4-formaat in de kantine.
            </li>
            <li>
              {' '}
              U bereikt alle leeftijden. Bij Noorse spelen jeugdploegen en
              seniorenploegen, pupillen, miniminiemen, miniemen, cadetten,
              meisjes, scholieren, dames, junioren, senioren, veteranen en
              andersvaliden.
            </li>
            <li>
              {' '}
              Uw sponsoring is natuurlijk fiscaal aftrekbaar. Na betaling wordt
              u onmiddellijk een fiscaal attest toegestuurd.
            </li>
            <li>
              {' '}
              Andere sponsorinitiatieven zijn altijd bespreekbaar. U kan
              hiervoor terecht bij de leden van het sponsorbestuur...
            </li>
            <li>
              {' '}
              Vanaf een sponsoring boven de 100 euro wordt u uitgenodigd op onze
              evenementen
            </li>
            <li>
              {' '}
              U helpt onze club groeien en geeft onze spelers de kans om aan
              sport te doen.
            </li>
            <li>
              {' '}
              U wilt sponsoren? Neem dan contact op met een van onze
              contactpersonen!
            </li>
          </List>
          Noorse dankt u!
        </TextBlock>
        <SubTitle>Sponsorverantwoordelijken</SubTitle>
        <TextBlock>
          <SpacedInfo
            items={[
              {
                label: 'Senioren',
                value: 'Ben De Block – seniorenbestuurnoorse@gmail.com',
              },
              {
                label: 'Jeugd Jongens',
                value: 'Peter Scheltjens – jeugd@noorse.be',
              },
              { label: 'G-voetbal', value: 'Willy Cools' },
            ]}
          ></SpacedInfo>
        </TextBlock>
      </Container>
    </Layout>
  )
}

export default SponsoringPage
