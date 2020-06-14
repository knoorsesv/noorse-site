import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Card } from './cards'
import * as moment from 'moment'

export const NextGame = (props) => {
  const data = useStaticQuery(graphql`
    query {
      vv {
        teamCalendar(teamId: "162533", language: nl) {
          id
          startDate
          homeTeam {
            logo
            name
          }
          awayTeam {
            logo
            name
          }
        }
      }
    }
  `)

  moment.now = function () {
    return process.env.PROD ? +new Date() : +new Date(2020, 2, 12)
  }

  const game = data.vv.teamCalendar.filter((game) => {
    return moment(game.startDate).isAfter(moment())
  })[0]

  const date = moment(game.startDate).format('DD-MM-YYYY HH:mm')

  return (
    <Card header="Volgende wedstrijd" {...props}>
      <div className={'text-center'}>{date}</div>
      <div className={'flex flex-row w-full justify-between items-center'}>
        <Team team={game.homeTeam} />
        <span>-</span>
        <Team team={game.awayTeam} />
      </div>
    </Card>
  )
}

const Team = ({ team }) => {
  return (
    <span className={'flex items-center flex-col'}>
      <img src={team.logo} />
      {team.name}
    </span>
  )
}
