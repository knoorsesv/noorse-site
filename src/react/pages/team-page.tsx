import { Helmet } from 'react-helmet'
import { Calendar } from '../icons/icons.tsx'
import { GameTable, CategoryTeamNavigation, SubTitle, Title } from '../index'
import { Container } from '../layout/index.ts'
import { ExternalLink } from '../links/external-link.tsx'
import type { FC } from 'react'
import type { Game } from '../types/game'
import type { Team } from '../types/team'
import type { Series } from '../types/series'
import type { Ranking } from '../types/rankings'
import { ImageWrapper } from '../../wrappers/image-wrapper.tsx'

export const TeamPage: FC<{
  ploeg: Team
  otherCategoryTeams: Team[]
  rankings?: Ranking[] | undefined | null
  series?: Series[]
  teamCalendar?: Game[]
  googleCalId?: string
}> = ({
  ploeg,
  rankings,
  series,
  teamCalendar,
  googleCalId,
  otherCategoryTeams,
}) => {
  const nonCupRankings =
    rankings
      ?.filter((ranking) => !ranking.name.toLowerCase().includes('beker'))
      .filter((ranking) => !ranking.name.toLowerCase().includes('bva')) ?? []

  const generalRanking =
    nonCupRankings.length === 1 && nonCupRankings[0].rankings
      ? nonCupRankings[0].rankings[0]
      : null

  const teamsAroundNoorseInRanking = generalRanking
    ? generalRanking.teams.filter((team, index) => {
        return (
          team.name?.toLowerCase().includes('noorse') ||
          generalRanking.teams[
            Math.min(index + 1, generalRanking.teams.length - 1)
          ].name
            ?.toLowerCase()
            .includes('noorse') ||
          generalRanking.teams[Math.max(index - 1, 0)].name
            ?.toLowerCase()
            .includes('noorse')
        )
      })
    : []

  const firstTeamInRanking =
    teamsAroundNoorseInRanking &&
    teamsAroundNoorseInRanking.every((team) => team.position !== 1)
      ? generalRanking?.teams[0]
      : null
  const noorseIsLastOrNextToLast =
    generalRanking &&
    (generalRanking.teams[generalRanking.teams.length - 1]?.name
      ?.toLowerCase()
      .includes('noorse') ||
      generalRanking.teams[generalRanking.teams.length - 2]?.name
        ?.toLowerCase()
        .includes('noorse'))

  return (
    <>
      <Helmet>
        <title>{ploeg.name}</title>
      </Helmet>
      <Container>
        <Title>{ploeg.name}</Title>
        {ploeg.ploegfoto?.responsiveURL && (
          <>
            <section className={'flex flex-col items-center'}>
              <ImageWrapper
                image={ploeg.ploegfoto}
                alt={`Ploegfoto ${ploeg.name}`}
                className="large:max-w-[520px] m-8 max-w-[360px]"
              />
            </section>
          </>
        )}
        <div className={'large:flex-row large:justify-between flex flex-col'}>
          <div
            id="team-info"
            className={'large:min-w-[40%] mt-6 flex flex-col px-4'}
          >
            {/* todo: these could maybe already go side by side on medium screen size */}
            <div className={'flex flex-col items-center'}>
              {ploeg.coach && (
                <>
                  <section className={'flex flex-col items-center'}>
                    <SubTitle>
                      {ploeg.bouw === 'recreatief'
                        ? `${ploeg.coach.length > 1 ? 'Verantwoordelijken' : 'Verantwoordelijke'}`
                        : `${ploeg.coach.length > 1 ? 'Coaches' : 'Coach'}`}
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
                                team.name?.toLowerCase().includes('noorse')
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

              {googleCalId ? (
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
              ) : (
                <></>
              )}
            </div>
          </div>
          {teamCalendar && (
            <div id="team-calendar" className="large:max-w-3/4 my-6">
              <section>
                <SubTitle>Kalender</SubTitle>
                <GameTable games={teamCalendar} />
              </section>
            </div>
          )}
        </div>

        <CategoryTeamNavigation
          categoryName={ploeg.categoryName}
          teams={otherCategoryTeams}
        />
      </Container>
    </>
  )
}
