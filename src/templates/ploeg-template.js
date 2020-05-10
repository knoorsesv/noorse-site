import React from 'react'
import Layout from '../components/layout'
import { SubTitle, Title } from '../components/titles'
import { graphql, useStaticQuery } from 'gatsby'

export default ({ pageContext: { ploegNode } }) => {
  const kalender = useStaticQuery(graphql`
    query {
      vv {
        teamCalendar(teamId: 162533, language: nl) {
          id
          homeTeam {
            name
          }
          awayTeam {
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Title>{ploegNode.naam}</Title>
      <div className={'grid grid-cols-3'}>
        <div className={'col-span-1 flex flex-col'}>
          <h2 className={'subtitle'}>Info</h2>
          <div className={'flex flex-col'}>
            <div>Coach</div>
            {ploegNode.coach &&
              ploegNode.coach.map((coach) => <span>{coach}</span>)}
            <div>Training</div>
            {ploegNode.training &&
              ploegNode.training.map((training) => <span>{training}</span>)}
          </div>
        </div>
        <div className={'col-span-2 flex flex-col'}>
          <SubTitle>Kalender</SubTitle>
          {kalender.vv.teamCalendar.map((game) => {
            return (
              <div key={game.id}>
                {game.homeTeam.name} -- {game.awayTeam.name}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
