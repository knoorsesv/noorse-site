import React from 'react'
import Layout from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { graphql, Link } from 'gatsby'
import { ExternalLink } from '../components/text'

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
  return (
    <Layout>
      <Link to={`${contentfulPloeg.categorie.naam.toLowerCase()}`}>
        {contentfulPloeg.categorie.naam}
      </Link>

      {contentfulPloeg.categorie.ploeg.map((ploeg) => (
        <Link key={ploeg.naam} to={`/team/${ploeg.naam.toLowerCase()}`}>
          {ploeg.naam}
        </Link>
      ))}

      <Title>
        {vvInfo && vvInfo.name} / {contentfulPloeg.naam}
      </Title>

      <div className={'grid grid-cols-3'}>
        <div className={'col-span-1 flex flex-col'}>
          <SubTitle>Info</SubTitle>
          <div className={'flex flex-col'}>
            <h3 className={'uppercase font-bold'}>Coach</h3>
            {contentfulPloeg.coach &&
              contentfulPloeg.coach.map((coach) => (
                <span key={coach}>{coach}</span>
              ))}
            <h3 className={'uppercase font-bold'}>Training</h3>
            {contentfulPloeg.training &&
              contentfulPloeg.training.map((training) => (
                <span key={training}> {training}</span>
              ))}
            <h3 className={'uppercase font-bold'}>Reeks</h3>
            {data.vv &&
              data.vv.teamSeriesAndRankings.series.map((series) => (
                <ExternalLink
                  key={series.name}
                  url={`https://www.voetbalvlaanderen.be/competitie/${series.serieId}/rangschikking`}
                >
                  {' '}
                  {series.name}
                </ExternalLink>
              ))}
          </div>
        </div>
        <div className={'col-span-2 flex flex-col'}>
          <SubTitle>Kalender</SubTitle>
          {data.vv &&
            data.vv.teamCalendar.map((game) => {
              return (
                <div key={game.id}>
                  {game.startDate} /{game.homeTeam.name} --
                  {game.awayTeam.name}
                  {game.outcome.status === 'finished'
                    ? `  //  ${game.outcome.homeTeamGoals} -   ${game.outcome.awayTeamGoals}`
                    : '-'}
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}
