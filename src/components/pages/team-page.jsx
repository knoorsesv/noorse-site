import React from 'react'
import { Helmet } from 'react-helmet'
import {
  CalendarTable,
  CategoryTeamNavigation,
  ExternalLink,
  SubTitle,
  Title,
} from '../index'
import { Calendar } from '../icons/icons.jsx'
import { Container } from '../layout'

export const TeamPage = ({
  ploeg,
  rankings,
  series,
  teamCalendar,
  Link,
  googleCalId,
}) => {
  const nonCupRankings = rankings
    ?.filter((ranking) => !ranking.name.toLowerCase().includes('beker'))
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
    (generalRanking.teams[generalRanking.teams.length - 1]?.name
      .toLowerCase()
      .includes('noorse') ||
      generalRanking.teams[generalRanking.teams.length - 2]?.name
        .toLowerCase()
        .includes('noorse'))
  return (
    <>
      <Helmet>
        <title>{ploeg.naam}</title>
      </Helmet>
      <Container>
        <Title>{ploeg.naam}</Title>
        <div className={'flex flex-col large:flex-row large:justify-between'}>
          <div
            id="team-info"
            className={'mt-6 flex flex-col px-4 large:min-w-[40%]'}
          >
            {/* todo: these could maybe already go side by side on medium screen size */}
            <div className={'flex flex-col items-center'}>
              {ploeg.coach && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Coach{ploeg.coach.length > 1 ? 'es' : ''}
                    </SubTitle>
                    {ploeg.coach.map((coach) => (
                      <span key={coach}>{coach}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {ploeg.afgevaardigde && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      Afgevaardigde
                      {ploeg.afgevaardigde.length > 1 ? 'n' : ''}
                    </SubTitle>
                    {ploeg.afgevaardigde.map((afgevaardigde) => (
                      <span key={afgevaardigde}>{afgevaardigde}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}
              {ploeg.training && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>Training</SubTitle>
                    {ploeg.training.map((training) => (
                      <span key={training}> {training}</span>
                    ))}
                  </section>
                  <br className={'mb-4'} />
                </>
              )}

              {series && (
                <section className={'mb-8 flex flex-col items-center'}>
                  <SubTitle>{series.length > 1 ? 'Reeksen' : 'Reeks'}</SubTitle>
                  {series.map((series) => (
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
          {teamCalendar && (
            <div id="team-calendar" className="large:max-w-3/4 mt-6">
              <section>
                <SubTitle>Kalender</SubTitle>
                <CalendarTable calendar={teamCalendar} />
              </section>
            </div>
          )}
        </div>

        {/* todo: categorie should be English */}
        <CategoryTeamNavigation
          category={ploeg.categorie}
          TeamLink={({ name, ...props }) => (
            <Link
              to={`/team/${ploeg.categorie.naam.toLowerCase()}/${name.toLowerCase()}`}
              {...props}
            >
              {name}
            </Link>
          )}
        />
      </Container>
    </>
  )
}
