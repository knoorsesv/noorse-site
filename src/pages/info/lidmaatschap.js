import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout, { Container } from '../../components/layout'
import { EmailLink, SpacedInfo, TextBlock } from '../../components/text'
import { SubTitle, Title } from '../../components/titles'

const LidMaatschapPage = () => {
  const data = useStaticQuery(graphql`
    {
      inschrijvingsBrief: allContentfulAsset(
        filter: { title: { eq: "InschrijvingsbriefJeugdNoorse2021" } }
      ) {
        nodes {
          localFile {
            url
          }
        }
      }
      lidgeldBrief: allContentfulAsset(
        filter: { title: { eq: "Brief lidgeld 2022-2023" } }
      ) {
        nodes {
          localFile {
            url
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
          De lidgelden voor het komende seizoen 2022-2023 zijn vastgelegd op:
          <table className={'table-fixed text-sm'}>
            <thead>
              <tr>
                <th className={'font-bold'}>Categorie</th>
                <th className={'font-bold'}>voor 01-07-2022</th>
                <th className={'font-bold'}>na 01-07-2022</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>G-Ploeg</td>
                <td className={'align-middle font-bold'}>€80</td>
                <td className={'align-middle font-bold'}>€110</td>
              </tr>
              <tr className={'border-none'}>
                <td>Instappers</td>
                <td className={'align-middle font-bold'}>€100 </td>
                <td className={'align-middle font-bold'}>€130 </td>
              </tr>
              <tr>
                <td> Jeugd (jongens en meisjes)</td>
                <td className={'font-bold'}> €180</td>
                <td className={'font-bold'}> €210</td>
              </tr>
              <tr>
                <td> Senioren (recreatief)</td>
                <td className={'font-bold'}> €180</td>
                <td className={'font-bold'}> €210</td>
              </tr>
              <tr>
                <td> Senioren (competitief)</td>
                <td className={'font-bold'}> €200</td>
                <td className={'font-bold'}> €230</td>
              </tr>
            </tbody>
          </table>
        </TextBlock>
        <TextBlock>
          Storten kan op volgende rekeningen:
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
                <td className={'align-middle font-bold'}>
                  BE30 7350 4969 5411
                </td>
              </tr>
              <tr className={'border-none'}>
                <td>
                  <div>Dames</div>
                  <div>Meisjes</div>
                </td>
                <td className={'align-middle font-bold'}>
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
          Geïnteresseerden voor jeugd jongens kunnen zich aanmelden door te
          mailen naar <EmailLink address="jeugd@noorse.be" /> om meer informatie
          te verkrijgen.
          <br />
          Wij hopen u alvast op transparante wijze te hebben geïnformeerd
          betreffende deze afspraken. Mocht u verder vragen hebben, dan horen
          wij het graag!
        </TextBlock>

        {data.lidgeldBrief.nodes[0] && (
          <a href={data.lidgeldBrief.nodes[0].localFile.url} download>
            Aankondiging lidgeld 2022-2023
          </a>
        )}
        <br />
        {/* <SubTitle>Extra Info Jeugd</SubTitle>
        <TextBlock>
          <a href={data.inschrijvingsBrief.nodes[0].localFile.url} download>
            Inschrijvingsbrief Jeugd Jongens K. Noorse SV – 2021-2022
          </a>
          <br />
        </TextBlock> */}

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
