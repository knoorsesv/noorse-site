import React from 'react'
import Layout, { Container } from '../../components/layout'
import { SubTitle, Title } from '../../components/titles'
import {
  EmailLink,
  ExternalLink,
  SpacedInfo,
  TextBlock,
} from '../../components/text'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { createSnippetFromContentArray } from '../../components/snippet'

const LidMaatschapPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { name: { eq: "Inschrijvingsbrief_K._Noorse_SV_-_2021-2022" } }
      ) {
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
        <title>Lid Worden</title>
        <meta property="og:title" content={`Lid Worden`} />
        <meta
          property="og:description"
          content={`Wil je lid worden van één van onze jeugd- of meisjesploegen? Hier vindt je alle info.`}
        />
      </Helmet>
      <Container>
        <Title>Lid Worden</Title>
        <SubTitle>Bestaande leden</SubTitle>
        <TextBlock>
          Inschrijvingsgeld bedraagt 130€ voor 31 mei 2021, daarna is het 150€ ,
          te storten op de specifieke rekening van jouw categorie:
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
                <td> Jongens (tot U21)</td>
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
          Betaling van het lidgeld aan dit tarief kan tot 31 mei 2021. Na deze
          datum bedraagt het lidgeld 150€.
          <br />
          Wij vragen u deze datum te respecteren zodat wij de nodige
          voorbereidingen kunnen treffen voor het volgend seizoen en
          wachtlijsten kunnen openstellen voor nieuwe leden.
          <br />
          Let op! Na deze datum betalen betekent dat u het risico loopt niet
          meer automatisch lid te zijn maar op de wachtlijst terecht te komen.
        </TextBlock>

        <SubTitle>Nieuwe leden</SubTitle>
        <TextBlock>
          Wil je lid worden van één van onze jeugdploegen of onze
          meisjesploegen, kom dan gerust eens een kijkje nemen naar onze
          trainingen op woensdagnamiddag en -avond. Voor meer inlichtingen kan u
          terecht bij de mensen van ons jeugdbestuur, die op woensdagnamiddag
          steeds aanwezig zijn. Of mail gewoon even naar{' '}
          <EmailLink address="jeugd@noorse.be" /> voor de jongens en voor de
          meisjes naar <EmailLink address="stefan.de.beukelaer@telenet.be" />.
          Onze senioren trainen op dinsdag- en donderdagavond om 20u00. Voor
          verdere info kan u terecht bij de seniorentrainer of bij iemand van
          ons seniorenbestuur. Of mail gewoon even naar{' '}
          <EmailLink address="seniorenbestuurnoorse@gmail.com" />.
          <br />
          Indien u lid wil worden van de club, vragen we u eerst contact op te
          nemen met de verantwoordelijke van de desbetreffende categorie, via
          onderstaande email adressen. Na akkoord en mits storting van het
          lidgeld kan je dan langskomen op Noorse om de inschrijving af te
          ronden.
          <br />
          Geïnteresseerden voor jeugd jongens kunnen zich{' '}
          <ExternalLink url="https://forms.gle/BfcSSbdRZkkx6MHe6">
            hier
          </ExternalLink>{' '}
          aanmelden of mailen naar <EmailLink address="jeugd@noorse.be" /> om
          meer informatie te verkrijgen.
          <br />
          Voor nieuwe leden bedraagt het lidgeld 150€.
          <br />
          Wij hopen u alvast op transparante wijze te hebben geïnformeerd
          betreffende deze afspraken. Mocht u verder vragen hebben, dan horen
          wij het graag!
        </TextBlock>

        <SubTitle>Extra Info Jeugd</SubTitle>
        <TextBlock>
          <a href={data.allFile.edges[0].node.publicURL} download>
            Inschrijvingsbrief Jeugd Jongens K. Noorse SV – 2021-2022
          </a>
          <br />
          {/*Bestaande leden van jeugd jongens kunnen zich{' '}*/}
          {/*<ExternalLink url="https://forms.gle/xgvF8VuGmvZjeafz9">*/}
          {/*  hier*/}
          {/*</ExternalLink>{' '}*/}
          {/* aanmelden.*/}
        </TextBlock>

        <SubTitle>Meer info</SubTitle>
        <TextBlock>
          <SpacedInfo
            items={[
              { label: 'Algemeen', value: 'info@noorse.be', email: true },
              { label: 'Jeugd', value: 'jeugd@noorse.be', email: true },
              { label: 'Senioren', value: 'senioren@noorse.be', email: true },
              {
                label: 'Meisjes & Dames',
                value: 'meisjesendames@noorse.be',
                email: true,
              },
            ]}
          />
        </TextBlock>
      </Container>
    </Layout>
  )
}

export default LidMaatschapPage
