import React from 'react'
import { CalendarPage } from './calendar-page.jsx'
import { gamesFactory } from '../data/games-factory.js'

const Template = (args) => <CalendarPage {...args} />

export default {
  title: 'Pages/CalendarPage',
  component: CalendarPage,
  args: {
    games: [
      gamesFactory(),
      gamesFactory({ startTime: '2023-09-24', homeTeam: { name: 'Noorse 3' } }),
      gamesFactory({
        startTime: '2023-09-24',
        awayTeam: { name: 'Eerste Ploeg' },
      }),
      gamesFactory({ startTime: '2023-09-25' }),
      gamesFactory({ startTime: '2023-09-25' }),
    ],
  },
}

export const Default = Template.bind({})
