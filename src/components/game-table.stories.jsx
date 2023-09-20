import React from 'react'
import { CalendarTable } from './game-table.jsx'

const Template = (args) => <CalendarTable {...args} />

export default {
  title: 'Component/GameTable',
  component: CalendarTable,
  args: {
    calendar: [
      {
        outcome: { status: 'postponed' },
      },
      {
        outcome: { status: 'planned' },
        homeTeam: { name: 'Home Team' },
        awayTeam: { name: 'Away Team' },
        startTime: `2020-08-09T16:00`,
      },
      {
        outcome: { status: 'planned' },
        homeTeam: { name: 'Noorse 3' },
        awayTeam: { name: 'Away Team' },
        startTime: `2020-08-09T16:00`,
      },
      {
        outcome: { status: 'planned' },
        homeTeam: { name: 'Home Team' },
        awayTeam: { name: 'Jeugd Noorse U16' },
        startTime: `2020-08-09T16:00`,
      },
      {
        outcome: { status: 'finished', homeTeamGoals: 3, awayTeamGoals: 4 },
        homeTeam: { name: 'Home Team' },
        awayTeam: { name: 'Jeugd Noorse U16' },
        startTime: `2020-08-09T16:00`,
      },
    ],
  },
}

export const Default = Template.bind({})
