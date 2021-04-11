import React from 'react'
import Layout, { Container } from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { graphql } from 'gatsby'
import { ExternalLink } from '../components/text'
import { format, parseISO } from 'date-fns'
import { CategoryTeamNavigation } from '../components/team-navigation'
import Helmet from 'react-helmet'

export const query = graphql`
  query($teamId: ID!) {
    vv {
      teamCalendar(teamId: $teamId, language: nl) {
        id
        startDate
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
      teamSeriesAndRankings(teamId: $teamId, language: nl) {
        series {
          serieId
          name
        }
      }
    }
  }
`

function CalendarTable({ calendar }) {
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  function formatTeamName(team) {
    return team.name.toLowerCase().includes('noorse')
      ? 'Noorse'
      : titleCase(team.name)
  }

  function notCancelled(game) {
    return game.outcome.status !== 'postponed'
  }

  function gameSort(a, b) {
    if (a.startDate > b.startDate) {
      return 1
    }
    if (a.startDate === b.startDate) {
      return 0
    }
    return -1
  }

  return (
    <table className={'w-full table-fixed border-separate text-sm lg:w-4/5'}>
      <tbody>
        {calendar
          .filter(notCancelled)
          .sort(gameSort)
          .map((game) => {
            const parsedDate = parseISO(game.startDate)
            game.formattedDate = format(parsedDate, 'dd/MM')
            game.time = format(parsedDate, 'HH:mm')
            return (
              <tr key={game.id} className={'pb-1'}>
                <td className={'text-sm w-2/12'}>
                  <div>{game.formattedDate}</div>
                  <div>{game.time}</div>
                </td>
                <td className={'w-7/12 px-0'}>
                  <div className={'flex flex-col'}>
                    <span className={'truncate'}>
                      {formatTeamName(game.homeTeam)}
                    </span>
                    <span className={'truncate'}>
                      {formatTeamName(game.awayTeam)}
                    </span>
                  </div>
                </td>
                <td className={'w-1/12 px-1 text-center'}>
                  {game.outcome.status === 'finished' ? (
                    <div className={'flex flex-col items-center'}>
                      <span>{game.outcome.homeTeamGoals}</span>
                      <span>{game.outcome.awayTeamGoals}</span>
                    </div>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

const TeamPage = ({ pageContext: { contentfulPloeg }, data }) => {
  if (process.env.GATSBY_VV_TEST_DATA === 'on') {
    // setting some dummy data here because this info will naturally change and break tests, and this is easier than mocking the graphql api
    data.vv.teamCalendar = [
      {
        id: 3,
        awayTeam: { name: 'S.V. NOORSE' },
        homeTeam: { name: 'KSK EKEREN DONK' },
        outcome: {
          status: 'planned',
          homeTeamGoals: null,
          awayTeamGoals: null,
        },
        startDate: '2020-08-10T16:00',
      },
      {
        id: 2,
        homeTeam: { name: 'S.V. NOORSE' },
        awayTeam: { name: 'KSK EKEREN DONK' },
        outcome: { status: 'finished', homeTeamGoals: 2, awayTeamGoals: 1 },
        startDate: '2020-08-09T16:00',
      },
      {
        id: 1,
        homeTeam: { name: 'S.V. NOORSE' },
        awayTeam: { name: 'KSK EKEREN DONK' },
        outcome: {
          status: 'postponed',
          homeTeamGoals: null,
          awayTeamGoals: null,
        },
        startDate: '2020-08-08T16:00',
      },
    ]
  }

  return (
    <Layout>
      <Helmet>
        <title>{contentfulPloeg.naam}</title>
      </Helmet>
      <Container>
        <Title>{contentfulPloeg.naam}</Title>

        <div className={'flex flex-col lg:grid lg:grid-cols-3'}>
          <div className={'flex flex-col lg:grid-col-1'}>
            <div className={'flex flex-col items-center'}>
              {contentfulPloeg.coach && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>
                    Coach{contentfulPloeg.coach.length > 1 ? 'es' : ''}
                  </SubTitle>
                  {contentfulPloeg.coach.map((coach) => (
                    <span key={coach}>{coach}</span>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />
              {contentfulPloeg.afgevaardigde && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>
                    Afgevaardigde
                    {contentfulPloeg.afgevaardigde.length > 1 ? 'n' : ''}
                  </SubTitle>
                  {contentfulPloeg.afgevaardigde.map((afgevaardigde) => (
                    <span key={afgevaardigde}>{afgevaardigde}</span>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />
              {contentfulPloeg.training && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>Training</SubTitle>
                  {contentfulPloeg.training.map((training) => (
                    <span key={training}> {training}</span>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />

              {data.vv && data.vv.teamSeriesAndRankings && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>Reeks</SubTitle>
                  {data.vv.teamSeriesAndRankings.series.map((series) => (
                    <ExternalLink
                      key={series.name}
                      url={`https://www.voetbalvlaanderen.be/competitie/${series.serieId}/rangschikking`}
                    >
                      {' '}
                      {series.name}
                    </ExternalLink>
                  ))}
                </section>
              )}
              <br className={'mb-4'} />
            </div>
          </div>
          {data.vv && data.vv.teamCalendar && (
            <section className={'mt-6 lg:mt-0 lg:col-span-2'}>
              <SubTitle>Kalender</SubTitle>
              <CalendarTable calendar={data.vv.teamCalendar} />
            </section>
          )}
        </div>

        <CategoryTeamNavigation category={contentfulPloeg.categorie} />
      </Container>
    </Layout>
  )
}

export default TeamPage
