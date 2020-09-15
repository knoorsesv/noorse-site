import React from 'react'
import Layout, { Container } from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { graphql, Link } from 'gatsby'
import { ExternalLink } from '../components/text'
import * as moment from 'moment'

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
  function noorseOrTeam(team) {
    return team.name.toLowerCase().includes('noorse') ? 'Noorse' : team.name
  }

  return (
    <table className={'w-full table-auto border-separate text-sm'}>
      <tbody>
        {calendar.map((game) => {
          game.formattedDate = moment(game.startDate).format('DD-MM-YYYY')
          return (
            <tr key={game.id} className={'pb-1'}>
              <td className={'text-sm px-0'}>{game.formattedDate}</td>
              <td className={'flex flex-col'}>
                <span className={'truncate'}>
                  {noorseOrTeam(game.homeTeam)}
                </span>
                <span className={'truncate'}>
                  {noorseOrTeam(game.awayTeam)}
                </span>
              </td>
              <td>
                {game.outcome.status === 'finished' ? (
                  <div className={'flex flex-col'}>
                    <span>{game.outcome.homeTeamGoals}</span>
                    <span>{game.outcome.awayTeamGoals}</span>
                  </div>
                ) : (
                  <span className={'align-middle'}>-</span>
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ({ pageContext: { contentfulPloeg }, data }) => {
  return (
    <Layout>
      <Container>
        <Title>{contentfulPloeg.naam}</Title>

        <div className={'flex flex-col lg:grid lg:grid-cols-3 gap-20'}>
          <div className={'flex flex-col lg:grid-col-1'}>
            <div className={'flex flex-col items-center'}>
              {contentfulPloeg.coach && (
                <div className={'flex flex-col items-center'}>
                  <SubTitle>Coach</SubTitle>
                  {contentfulPloeg.coach.map((coach) => (
                    <span key={coach}>{coach}</span>
                  ))}
                </div>
              )}
              <br className={'mb-4'} />
              {contentfulPloeg.training && (
                <div className={'flex flex-col items-center'}>
                  <SubTitle>Training</SubTitle>
                  {contentfulPloeg.training.map((training) => (
                    <span key={training}> {training}</span>
                  ))}
                </div>
              )}
              <br className={'mb-4'} />

              {data.vv && data.vv.teamSeriesAndRankings && (
                <div className={'flex flex-col items-center'}>
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
                </div>
              )}
              <br className={'mb-4'} />
            </div>
          </div>
          {data.vv && data.vv.teamCalendar && (
            <div className={'lg:col-span-2'}>
              <SubTitle>Kalender</SubTitle>
              <CalendarTable calendar={data.vv.teamCalendar} />
            </div>
          )}
        </div>

        <CategoryTeamNavigation category={contentfulPloeg.categorie} />
      </Container>
    </Layout>
  )
}

const CategoryTeamNavigation = ({ category, className }) => {
  return (
    <div className={`${className} bg-green-light bg-opacity-25 p-4`}>
      <h3 className={'w-full pb-2 border-b-2 border-black text-center'}>
        {category.naam}
      </h3>
      <div className={'flex flex-wrap justify-around'}>
        {category.ploeg.map((ploeg) => (
          <Link
            key={ploeg.naam}
            to={`/team/${ploeg.naam.toLowerCase()}`}
            activeClassName={'font-bold'}
            className={'text-gray-dark underline'}
          >
            {ploeg.naam}
          </Link>
        ))}
      </div>
    </div>
  )
}
