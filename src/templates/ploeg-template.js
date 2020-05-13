import React from 'react'
import Layout from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { graphql, Link } from 'gatsby'

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
            <div>Coach</div>
            {contentfulPloeg.coach &&
              contentfulPloeg.coach.map((coach) => (
                <span key={coach}>{coach}</span>
              ))}
            <div>Training</div>
            {contentfulPloeg.training &&
              contentfulPloeg.training.map((training) => (
                <span key={training}> {training}</span>
              ))}
          </div>
        </div>
        <div className={'col-span-2 flex flex-col'}>
          <SubTitle>Kalender</SubTitle>
          {data.vv &&
            data.vv.teamCalendar.map((game) => {
              return (
                <div key={game.id}>
                  {game.startDate} / {game.homeTeam.name} --{' '}
                  {game.awayTeam.name}
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}
