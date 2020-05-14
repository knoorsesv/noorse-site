import React, { useState } from 'react'
import Layout from '../components/layout'
import { SubTitle } from '../components/titles'
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

const Label = ({ children }) => {
  return <h3 className={'uppercase font-bold mb-2'}>{children}</h3>
}
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
      <div className={'flex flex-row justify-between mb-4'}>
        <Link
          to={`${contentfulPloeg.categorie.naam.toLowerCase()}`}
          className={'text-gray-dark underline'}
        >
          {contentfulPloeg.categorie.naam}
        </Link>

        <div className={'w-1/2 flex flex-col items-end'}>
          <div
            onClick={togglePloegMenu}
            role="link"
            tabIndex="0"
            onKeyDown={keyDownHandler}
          >
            <span>{contentfulPloeg.naam}</span>
            <FontAwesomeIcon icon={faAngleDown} className={'ml-2'} />
          </div>

          <div
            className={`${
              ploegMenuShown ? 'flex' : 'hidden'
            } flex-col items-end my-2 elevation-2 bg-opacity-75 py-2`}
          >
            {dubbelTeams.map((ploeg) => (
              <Link
                key={ploeg.naam}
                to={`/team/${ploeg.naam.toLowerCase()}`}
                activeClassName={'font-bold bg-gray'}
                className={
                  'border-opacity-50 text-gray-dark w-full py-1 pl-8 pr-4 bg-opacity-50'
                }
              >
                {ploeg.naam}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={'flex flex-col'}>
        <div className={'col-span-1 flex flex-col'}>
          <SubTitle>Info</SubTitle>
          <div className={'flex flex-col items-center'}>
            <Label>Coach</Label>

            {contentfulPloeg.coach &&
              contentfulPloeg.coach.map((coach) => (
                <span key={coach}>{coach}</span>
              ))}
            <br className={'mb-4'} />
            <Label>Training</Label>

            {contentfulPloeg.training &&
              contentfulPloeg.training.map((training) => (
                <span key={training}> {training}</span>
              ))}
            <br className={'mb-4'} />

            <Label>Reeks</Label>
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
          <div>
            <SubTitle>Kalender</SubTitle>
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
