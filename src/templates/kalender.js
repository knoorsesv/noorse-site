import React from 'react'
import Layout, { Container } from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { format, parseISO } from 'date-fns'
import { titleCase } from '../utils/formatting'
import { nlBE } from 'date-fns/locale'

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
  const day = (date) => {
    return format(parseISO(date), 'eeeeee', { locale: nlBE })
  }
  const date = (date) => {
    return format(parseISO(date), 'dd/MM', { locale: nlBE })
  }

  const hour = (date) => {
    return format(parseISO(date), 'HH:mm', { locale: nlBE })
  }
  const games = data.vv.clubMatchesAssignations
  return (
    <Layout>
      <Helmet>
        <title>Kalender</title>
      </Helmet>
      <Container>
        <Title>Kalender</Title>
        <SubTitle>Wedstrijden deze week</SubTitle>
        <table className={'border-collapse'}>
          <tbody>
            {games.map((game, index) => {
              return (
                <React.Fragment>
                  <tr key={game.id} className={'lg:hidden'}>
                    <td
                      className={
                        'w-2/5 font-bold underline border-none sm:hidden'
                      }
                    >
                      {date(game.startDate)} {hour(game.startDate)}
                    </td>
                    <td
                      className={
                        'hidden sm:table-cell pl-0 font-bold underline border-none'
                      }
                    >
                      {day(game.startDate)} {date(game.startDate)} -{' '}
                      {hour(game.startDate)}
                    </td>
                    <td className={'border-none'}></td>
                  </tr>
                  <tr className={'lg:hidden'}>
                    <td className={'border-none py-1'}>{game.title}</td>
                    <td className={'border-none py-1'}>
                      {titleCase(game.awayTeam.name)}
                    </td>
                  </tr>
                  <tr className={'lg:hidden'}>
                    <td className={''} />
                    <td className={'py-1'}>{titleCase(game.homeTeam.name)}</td>
                  </tr>

                  {index === 0 ||
                  date(game.startDate) !== date(games[index - 1].startDate) ? (
                    <tr
                      key={game.id}
                      className={'hidden lg:table-row xl:hidden'}
                    >
                      <td
                        colSpan={3}
                        className={'font-bold underline border-none'}
                      >
                        {day(game.startDate)} {date(game.startDate)}
                      </td>
                    </tr>
                  ) : (
                    <></>
                  )}
                  <tr className={'hidden lg:table-row xl:hidden'}>
                    <td className={''}>{game.title}</td>
                    <td className={''}>{hour(game.startDate)}</td>
                    <td className={''}>
                      {titleCase(game.homeTeam.name)} -{' '}
                      {titleCase(game.awayTeam.name)}
                    </td>
                  </tr>

                  <tr key={game.id} className={'hidden xl:table-row'}>
                    <td className={'font-bold underline'}>
                      {day(game.startDate)} {date(game.startDate)} -{' '}
                      {hour(game.startDate)}
                    </td>
                    <td className={''}>{game.title}</td>
                    <td className={''}>
                      {titleCase(game.homeTeam.name)} -{' '}
                      {titleCase(game.awayTeam.name)}
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </Container>
    </Layout>
  )
}

export default KalenderPage
