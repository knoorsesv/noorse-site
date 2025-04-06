import { GameTable } from './game-table.tsx'
import { gamesFactory } from './data/games-factory'

import type { Meta, StoryObj } from '@storybook/react'
import { teamFactory } from './data/team-factory.ts'

const meta: Meta<typeof GameTable> = {
  title: 'Component/GameTable',
  component: GameTable,
}

export default meta

type Story = StoryObj<typeof GameTable>

export const Primary: Story = {
  args: {
    games: [
      gamesFactory({
        outcome: { status: 'postponed' },
      }),
      gamesFactory({
        outcome: { status: 'planned' },
        homeTeam: teamFactory({ name: 'Home Team' }),
        awayTeam: teamFactory({ name: 'Away Team' }),
        startTime: `2020-08-09T16:00`,
      }),
      gamesFactory({
        outcome: { status: 'planned' },
        homeTeam: teamFactory({ name: 'Noorse 3' }),
        awayTeam: teamFactory({ name: 'Away Team' }),
        startTime: `2020-08-09T16:00`,
      }),
      gamesFactory({
        outcome: { status: 'planned' },
        homeTeam: teamFactory({ name: 'Home Team' }),
        awayTeam: teamFactory({ name: 'Jeugd Noorse U16' }),
        startTime: `2020-08-09T16:00`,
      }),
      gamesFactory({
        outcome: { status: 'finished', homeTeamGoals: 3, awayTeamGoals: 4 },
        homeTeam: teamFactory({ name: 'Home Team' }),
        awayTeam: teamFactory({ name: 'Jeugd Noorse U16' }),
        startTime: `2020-08-09T16:00`,
      }),
    ],
  },
}
