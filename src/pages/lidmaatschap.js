import React from 'react'
import Layout from '../components/layout'
import { Container } from '../components/centeredContainer'
import { Header, SubHeader } from '../components/headers'
import { SpacedInfo, TextBlock } from '../components/text'
import { graphql, useStaticQuery } from 'gatsby'

const LidMaatschapPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "InschrijvingsbriefJeugdNoorse2021" } }) {
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
        <Header>Lid Worden</Header>
        <SubHeader>Bestaande leden</SubHeader>
        <TextBlock>
          Inschrijvingsgeld bedraagt 130€, te storten op de specifieke rekening
          van jouw categorie:
        </TextBlock>
        <TextBlock>
          <table className={'table-fixed text-sm'}>
            <thead>
              <tr>
                <td className={'font-bold'}>Categorie</td>
                <td className={'font-bold'}>Rekeningnummer</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>Seniors (vanaf U21)</div>
                  <div>Zaalvoetbal</div>
                </td>
                <td className={'font-bold align-middle'}>
                  BE30 7350 4969 5411
                </td>
              </tr>
              <tr className={'border-none'}>
                <td>
                  <div>Dames</div>
                  <div>Meisjes</div>
                </td>
                <td className={'font-bold align-middle'}>
                  BE23 7350 5079 9591
                </td>
              </tr>
              <tr>
                <td> Jongens (tot U17)</td>
                <td className={'font-bold'}> BE86 7350 4969 9350</td>
              </tr>
              <tr>
                <td> G-voetbal</td>
                <td className={'font-bold'}> BE47 7350 5079 8480</td>
              </tr>
            </tbody>
          </table>
        </TextBlock>

        <TextBlock>
          Als u in uw gezin een dochter en een zoon bij Noorse hebt spelen, dan
          vragen wij u APART te storten: voor uw dochter op de meisjesrekening
          en voor uw zoon op de jongensrekening.
          <br />
          Betaling van het lidgeld aan dit tarief kan tot 31 mei 2020. Na deze
          datum bedraagt het lidgeld 150€.
          <br />
          Wij vragen u deze datum te respecteren zodat wij de nodige
          voorbereidingen kunnen treffen voor het volgend seizoen en
          wachtlijsten kunnen openstellen voor nieuwe leden.
          <br />
          Let op! Na deze datum betalen betekent dat u het risico loopt niet
          meer automatisch lid te zijn maar op de wachtlijst terecht te komen.
        </TextBlock>

        <SubHeader>Nieuwe leden</SubHeader>
        <TextBlock>
          Wil je lid worden van één van onze jeugdploegen of onze
          meisjesploegen, kom dan gerust eens een kijkje nemen naar onze
          trainingen op woensdagnamiddag en -avond. Voor meer inlichtingen kan u
          terecht bij de mensen van ons jeugdbestuur, die op woensdagnamiddag
          steeds aanwezig zijn. Of mail gewoon even naar jeugd@noorse.be voor de
          jongens en voor de meisjes naar stefan.de.beukelaer@telenet.be. Onze
          senioren trainen op dinsdag- en donderdagavond om 20u00. Voor verdere
          info kan u terecht bij de seniorentrainer of bij iemand van ons
          seniorenbestuur. Of mail gewoon even naar
          seniorenbestuurnoorse@gmail.com.
          <br />
          Indien u lid wil worden van de club, vragen we u eerst contact op te
          nemen met de verantwoordelijke van de desbetreffende categorie, via
          onderstaande email adressen. Na akkoord en mits storting van het
          lidgeld kan je dan langskomen op Noorse om de inschrijving af te
          ronden.
          <br />
          Aan geïnteresseerden voor jeugd jongens vragen we volgend{' '}
          <a
            href="https://forms.gle/4UufKtgb7tN7rxAd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            formulier
          </a>
          in te vullen.
          <br />
          Voor nieuwe leden bedraagt het lidgeld 150€.
          <br />
          Wij hopen u alvast op transparante wijze te hebben geïnformeerd
          betreffende deze afspraken. Mocht u verder vragen hebben, dan horen
          wij het graag!
        </TextBlock>

        <SubHeader>Extra Info Jeugd</SubHeader>
        <TextBlock>
          <a href={data.allFile.edges[0].node.publicURL} download>
            Inschrijvingsbrief K. Noorse SV – 2020-2021
          </a>
          <br />
          Bestaande leden van jeugd jongens kunnen zich
          <a
            href="https://forms.gle/SWG2tV2q9wP5WiX16"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            hier{' '}
          </a>
          opnieuw aanmelden.
        </TextBlock>

        <SubHeader>Meer info</SubHeader>
        <TextBlock>
          <SpacedInfo
            items={[
              { label: 'Algemeen', value: 'info@noorse.be' },
              { label: 'Jeugd', value: 'jeugd@noorse.be' },
              { label: 'Senioren', value: 'senioren@noorse.be' },
              { label: 'Meisjes & Dames', value: 'meisjesendames@noorse.be' },
            ]}
          />
        </TextBlock>
      </Container>
    </Layout>
  )
}

export default LidMaatschapPage
