import React from 'react'
import Layout, { Container } from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { format, parseISO } from 'date-fns'
import { titleCase } from '../utils/formatting'
import { nlBE } from 'date-fns/locale'
import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'

export const query = graphql`
  query($clubId: ID!, $startDate: String!, $endDate: String!) {
    vv {
      clubMatchesAssignations(
        clubId: $clubId
        language: nl
        startDate: $startDate
        endDate: $endDate
        hasLocation: false
      ) {
        id
        startDate
        title
        homeTeam {
          name
        }
        awayTeam {
          name
        }
        outcome {
          status
          homeTeamGoals
          awayTeamGoals
        }
      }
    }
  }
`

const KalenderPage = ({ data }) => {
  console.log(data)

  const formatDate = (date) => {
    return format(parseISO(date), 'eeeeee dd/MM - HH:mm', { locale: nlBE })
  }

  // console.log(format(new Date(), 'yyyy/MM/dd'))
  console.log(
    format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy/MM/dd')
  )
  console.log(format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy/MM/dd'))
  return (
    <Layout>
      <Helmet>
        <title>Kalender</title>
      </Helmet>
      <Container>
        <Title>Kalender</Title>
        <SubTitle>Wedstrijden deze week</SubTitle>
        <table>
          <tbody>
            {data.vv.clubMatchesAssignations.map((game) => {
              return (
                <tr key={game.id}>
                  <td>{formatDate(game.startDate)}</td>
                  <td>{game.title}</td>
                  <td>{titleCase(game.homeTeam.name)}</td>
                  <td>-</td>
                  <td>{titleCase(game.awayTeam.name)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* either make this table more expansive or just show it on the home page*/}
        {/*<CalendarTable calendar={data.vv.clubMatchesAssignations}/>*/}
      </Container>
    </Layout>
  )
}

export default KalenderPage
