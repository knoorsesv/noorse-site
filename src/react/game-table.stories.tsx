import { GameTable } from './game-table.tsx'
import { gamesFactory } from './data/games-factory.js'

import type { Meta, StoryObj } from '@storybook/react'

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
