import React from 'react'
import Layout, { Container } from '../components/layout'
import { Title } from '../components/titles'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { format, parseISO } from 'date-fns'
import { titleCase } from '../utils/formatting'
import { nlBE } from 'date-fns/locale'

export const query = graphql`
  query($clubId: ID!) {
    vv {
      clubMatchesAssignations(
        clubId: $clubId
        language: nl
        startDate: "2021/08/20"
        endDate: "2021/08/26"
        hasLocation: true
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
  return (
    <Layout>
      <Helmet>
        <title>Kalender</title>
      </Helmet>
      <Container>
        <Title>Kalender</Title>
        <table>
          <tbody>
            {data.vv.clubMatchesAssignations.map((game) => {
              return (
                <tr>
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
