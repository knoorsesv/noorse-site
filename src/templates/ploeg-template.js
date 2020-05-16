import React, { useState } from 'react'
import Layout from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { graphql, Link } from 'gatsby'
import { ExternalLink } from '../components/text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
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

export default ({ pageContext: { vvInfo, contentfulPloeg }, data }) => {
  const [ploegMenuShown, showPloegMenu] = useState(false)

  const dubbelTeams = [...contentfulPloeg.categorie.ploeg]

  const togglePloegMenu = () => {
    showPloegMenu(!ploegMenuShown)
  }
  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      togglePloegMenu()
    }
  }

  return (
    <Layout>
      <div
        className={
          'flex flex-row xl:flex-col justify-between lg:items-center mb-4 lg:text-2xl'
        }
      >
        <Link
          to={`${contentfulPloeg.categorie.naam.toLowerCase()}`}
          className={'text-gray-dark underline xl:text-3xl'}
        >
          {contentfulPloeg.categorie.naam}
        </Link>

        <div
          className={
            'w-1/2 lg:w-4/5 xl:w-full flex flex-col items-end xl:items-center'
          }
        >
          <div
            onClick={togglePloegMenu}
            role="link"
            tabIndex="0"
            className={'lg:hidden'}
            onKeyDown={keyDownHandler}
          >
            <span>{contentfulPloeg.naam}</span>
            <FontAwesomeIcon icon={faAngleDown} className={'ml-2'} />
          </div>

          <div
            className={`${
              ploegMenuShown ? 'flex' : 'hidden lg:flex'
            } flex-col lg:flex-row lg:flex-wrap items-end lg:justify-end xl:justify-around my-2 py-2 lg:w-full xl:w-3/5 elevation-2 lg:elevation-0 bg-opacity-75 `}
          >
            {dubbelTeams.map((ploeg) => (
              <Link
                key={ploeg.naam}
                to={`/team/${ploeg.naam.toLowerCase()}`}
                activeClassName={'font-bold bg-gray'}
                className={
                  'lg:self-end text-gray-dark w-full lg:w-auto py-1 pl-8 pr-4 lg:px-4 lg:py-2 lg:mx-4 border-opacity-50 bg-opacity-50'
                }
              >
                {ploeg.naam}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={'flex flex-col lg:grid lg:grid-cols-3 xl:px-32'}>
        <div className={'flex flex-col lg:grid-col-1'}>
          <Title>Info</Title>
          <div className={'flex flex-col items-center'}>
            <SubTitle>Coach</SubTitle>

            {contentfulPloeg.coach &&
              contentfulPloeg.coach.map((coach) => (
                <span key={coach}>{coach}</span>
              ))}
            <br className={'mb-4'} />
            <SubTitle>Training</SubTitle>

            {contentfulPloeg.training &&
              contentfulPloeg.training.map((training) => (
                <span key={training}> {training}</span>
              ))}
            <br className={'mb-4'} />

            <SubTitle>Reeks</SubTitle>
            {data.vv &&
              data.vv.teamSeriesAndRankings &&
              data.vv.teamSeriesAndRankings.series.map((series) => (
                <ExternalLink
                  key={series.name}
                  url={`https://www.voetbalvlaanderen.be/competitie/${series.serieId}/rangschikking`}
                >
                  {' '}
                  {series.name}
                </ExternalLink>
              ))}
            <br className={'mb-4'} />
          </div>
        </div>
        {data.vv && data.vv.teamCalendar && (
          <div className={'lg:col-span-2'}>
            <Title>Kalender</Title>
            <table>
              <tbody>
                {data.vv.teamCalendar.map((game) => {
                  game.formattedDate = moment(game.startDate).format(
                    'DD-MM-YYYY'
                  )
                  return (
                    <tr key={game.id}>
                      <td className={'text-sm'}>{game.formattedDate}</td>
                      <td className={'flex flex-col ml-4 w-4/5'}>
                        <span className={'truncate'}>{game.homeTeam.name}</span>
                        <span className={'truncate'}>{game.awayTeam.name}</span>
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
          </div>
        )}
      </div>
    </Layout>
  )
}
