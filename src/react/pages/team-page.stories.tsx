import { TeamPage } from './team-page.jsx'
import {
  rankingFactory,
  serieFactory,
  teamFactory,
} from '../data/team-factory.js'
import { calendar } from '../data/games-factory.js'
import { categoryFactory } from '../data/category-factory.js'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Pages/TeamPage',
  component: TeamPage,
  args: {
    ploeg: teamFactory({ categorie: categoryFactory() }),
    series: [serieFactory(), serieFactory({ name: 'Beker' })],
    rankings: [
      rankingFactory(),
      rankingFactory({ name: 'beker' }),
      rankingFactory({ name: 'bva' }),
    ],
    teamCalendar: calendar(),
  },
} satisfies Meta<typeof TeamPage>

type Story = StoryObj<typeof TeamPage>

export const Default: Story = {}
