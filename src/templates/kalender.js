import React from 'react'
import Layout, { Container } from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { format, parseISO } from 'date-fns'
import { sanitizeTeamName } from '../utils/formatting'
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

  function dateDiffersFromPreviousGame(index, game) {
    return (
      index === 0 || date(game.startDate) !== date(games[index - 1].startDate)
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>Kalender</title>
      </Helmet>
      <Container>
        <Title>Kalender</Title>
        <SubTitle>Wedstrijden deze week</SubTitle>
        <section
          className={'min-w-[75vw] lg:w-[75vw] lg:min-w-0 xl:max-w-full'}
        >
          <ul className={'list-none'}>
            {games.map((game, index) => {
              return (
                <React.Fragment>
                  {dateDiffersFromPreviousGame(index, game) ? (
                    <li className={''}>
                      <span className={'font-bold underline border-none'}>
                        {day(game.startDate)} {date(game.startDate)}
                      </span>
                    </li>
                  ) : (
                    <></>
                  )}

                  <li
                    key={game.id}
                    className={
                      'flex justify-between align-start w-full border-b border-gray py-1'
                    }
                  >
                    <div className={'sm:my-1 lg:w-1/12'}>
                      {hour(game.startDate)}
                    </div>
                    <div
                      className={'flex flex-col w-3/4 lg:w-11/12 lg:flex-row'}
                    >
                      <div
                        className={
                          'underline sm:my-1 lg:my-0 lg:w-1/5 xl:w-1/4'
                        }
                      >
                        {game.title}
                      </div>
                      <div
                        className={
                          'flex flex-col sm:flex-row sm:justify-between lg:w-3/5 xl:w-3/4'
                        }
                      >
                        <div className={'sm:w-2/5'}>
                          {sanitizeTeamName(game.homeTeam.name)}
                        </div>
                        <div className={'hidden sm:block px-2'}>
                          <span>-</span>
                        </div>
                        <div className={'sm:w-2/5'}>
                          {sanitizeTeamName(game.awayTeam.name)}
                        </div>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        </section>
      </Container>
    </Layout>
  )
}

export default KalenderPage
