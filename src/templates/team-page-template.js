import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { CalendarTable } from '../components/game-table'
import Layout, { Container } from '../layouts/layout'
import { CategoryTeamNavigation } from '../components/team-navigation'
import { ExternalLink } from '../components/text.jsx'
import { SubTitle, Title } from '../components/titles'
import { Calendar } from '../components/icons/icons.jsx'

export const query = graphql`
  query ($teamId: ID!) {
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
        rankings {
          name
          rankings {
            teams {
              name
              position
              points
            }
          }
        }
      }
    }
  }
`

const TeamPage = ({ pageContext: { contentfulPloeg, googleCalId }, data }) => {
  const nonCupRankings =
    data.vv &&
    data.vv.teamSeriesAndRankings &&
    data.vv.teamSeriesAndRankings.rankings &&
    data.vv.teamSeriesAndRankings.rankings
      .filter((ranking) => !ranking.name.toLowerCase().includes('beker'))
      .filter((ranking) => !ranking.name.toLowerCase().includes('bva'))

  const generalRanking =
    nonCupRankings && nonCupRankings.length === 1 && nonCupRankings[0].rankings
      ? nonCupRankings[0].rankings[0]
      : null
  const teamsAroundNoorseInRanking =
    generalRanking &&
    generalRanking.teams.filter((team, index) => {
      return (
        team.name.toLowerCase().includes('noorse') ||
        generalRanking.teams[
          Math.min(index + 1, generalRanking.teams.length - 1)
        ].name
          .toLowerCase()
          .includes('noorse') ||
        generalRanking.teams[Math.max(index - 1, 0)].name
          .toLowerCase()
          .includes('noorse')
      )
    })

  const firstTeamInRanking =
    teamsAroundNoorseInRanking &&
    teamsAroundNoorseInRanking.every((team) => team.position !== 1)
      ? generalRanking.teams[0]
      : null
  const noorseIsLastOrNextToLast =
    generalRanking &&
    (generalRanking.teams[generalRanking.teams.length - 1].name
      .toLowerCase()
      .includes('noorse') ||
      generalRanking.teams[generalRanking.teams.length - 2].name
        .toLowerCase()
        .includes('noorse'))
  return (
    <Layout>
      <Helmet>
        <title>{contentfulPloeg.naam}</title>
      </Helmet>
      <Container>
        <Title>{contentfulPloeg.naam}</Title>
        <div className={'flex flex-col large:flex-row large:justify-between'}>
          <div
            id="team-info"
            className={'mt-6 flex flex-col px-4 large:min-w-[40%]'}
          >
            {/* todo: these could maybe already go side by side on medium screen size */}
            <div className={'flex flex-col items-center'}>
              {contentfulPloeg.coach && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Coach{contentfulPloeg.coach.length > 1 ? 'es' : ''}
                    </SubTitle>
                    {contentfulPloeg.coach.map((coach) => (
                      <span key={coach}>{coach}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {contentfulPloeg.afgevaardigde && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Afgevaardigde
                      {contentfulPloeg.afgevaardigde.length > 1 ? 'n' : ''}
                    </SubTitle>
                    {contentfulPloeg.afgevaardigde.map((afgevaardigde) => (
                      <span key={afgevaardigde}>{afgevaardigde}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {contentfulPloeg.training && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>Training</SubTitle>
                    {contentfulPloeg.training.map((training) => (
                      <span key={training}> {training}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}

              {data.vv && data.vv.teamSeriesAndRankings && (
                <section className={'mb-8 flex flex-col items-center'}>
                  <SubTitle>
                    {data.vv.teamSeriesAndRankings.series.length > 1
                      ? 'Reeksen'
                      : 'Reeks'}
                  </SubTitle>
                  {data.vv.teamSeriesAndRankings.series.map((series) => (
                    <ExternalLink
                      key={series.name}
                      href={`https://www.voetbalvlaanderen.be/competitie/${series.serieId}/rangschikking`}
                    >
                      {' '}
                      {series.name}
                    </ExternalLink>
                  ))}
                </section>
              )}
              {generalRanking && (
                <section className={'flex flex-col items-center'}>
                  <SubTitle>Klassement</SubTitle>
                  {/* todo: stupidly formatted by graphql api */}
                  {/* <div>{generalRankingName}</div> */}
                  <table className="text-sm">
                    <tbody>
                      {firstTeamInRanking ? (
                        <>
                          <tr>
                            <td className="font-bold">
                              {firstTeamInRanking.position}
                            </td>
                            <td>{firstTeamInRanking.name}</td>
                            <td>{firstTeamInRanking.points}</td>
                          </tr>
                          <tr>
                            <td className="text-center" colSpan={3}>
                              ...
                            </td>
                          </tr>
                        </>
                      ) : (
                        <></>
                      )}
                      {teamsAroundNoorseInRanking.map((team) => {
                        return (
                          <tr key={team.position}>
                            <td className="font-bold">{team.position}</td>
                            <td
                              className={
                                team.name.toLowerCase().includes('noorse')
                                  ? 'font-bold'
                                  : ''
                              }
                            >
                              {team.name}
                            </td>
                            <td>{team.points}</td>
                          </tr>
                        )
                      })}
                      {!noorseIsLastOrNextToLast ? (
                        <tr>
                          <td className="text-center" colSpan={3}>
                            ...
                          </td>
                        </tr>
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </section>
              )}

              <div className={'my-6'}>
                <ExternalLink
                  href={`https://calendar.google.com/calendar/u/0/r?cid=${googleCalId}`}
                  altText={'Google Calendar'}
                  styled={false}
                  icon={false}
                >
                  <div className={'flex flex-row items-center underline'}>
                    <Calendar />
                    <span className={'ml-2'}>Google Calendar</span>
                  </div>
                </ExternalLink>
              </div>
            </div>
          </div>
          {data.vv && data.vv.teamCalendar && (
            <div id="team-calendar" className="large:max-w-3/4 mt-6">
              <section>
                <SubTitle>Kalender</SubTitle>
                <CalendarTable calendar={data.vv.teamCalendar} />
              </section>
            </div>
          )}
        </div>

        <CategoryTeamNavigation
          category={contentfulPloeg.categorie}
          TeamLink={({ name, ...props }) => (
            <Link to={`/team/${name.toLowerCase()}`} {...props}>
              {name}
            </Link>
          )}
        />
      </Container>
    </Layout>
  )
}

export default TeamPage
