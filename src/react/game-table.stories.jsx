import { CalendarTable } from './game-table.jsx'
import { gamesFactory } from './data/games-factory.js'

const Template = (args) => <CalendarTable {...args} />

export default {
  title: 'Component/GameTable',
  component: CalendarTable,
  args: {
    calendar: [
      gamesFactory({
        outcome: { status: 'postponed' },
      }),
      gamesFactory({
        outcome: { status: 'planned' },
        homeTeam: { name: 'Home Team' },
        awayTeam: { name: 'Away Team' },
        startTime: `2020-08-09T16:00`,
      }),
      gamesFactory({
        outcome: { status: 'planned' },
        homeTeam: { name: 'Noorse 3' },
        awayTeam: { name: 'Away Team' },
        startTime: `2020-08-09T16:00`,
      }),
      gamesFactory({
        outcome: { status: 'planned' },
        homeTeam: { name: 'Home Team' },
        awayTeam: { name: 'Jeugd Noorse U16' },
        startTime: `2020-08-09T16:00`,
      }),
      gamesFactory({
        outcome: { status: 'finished', homeTeamGoals: 3, awayTeamGoals: 4 },
        homeTeam: { name: 'Home Team' },
        awayTeam: { name: 'Jeugd Noorse U16' },
        startTime: `2020-08-09T16:00`,
      }),
    ],
  },
}

export const Default = Template.bind({})
