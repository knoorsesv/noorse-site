import type { Meta, StoryObj } from '@storybook/react-vite'
import { calendar } from '../data/games-factory.js'
import {
  rankingFactory,
  serieFactory,
  teamFactory,
} from '../data/team-factory.js'
import { TeamPage } from './team-page.jsx'

export default {
  title: 'Pages/TeamPage',
  component: TeamPage,
  args: {
    ploeg: teamFactory({ categoryName: 'Categorie' }),
    otherCategoryTeams: [
      teamFactory({ categoryName: 'Categorie', bouw: 'boven', name: 'Team 1' }),
      teamFactory({ categoryName: 'Categorie', bouw: 'onder', name: 'Team 2' }),
      teamFactory({ categoryName: 'Categorie', bouw: 'onder', name: 'Team 3' }),
    ],
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
