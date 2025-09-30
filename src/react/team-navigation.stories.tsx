import type { Meta, StoryObj } from '@storybook/react-vite'
import { CategoryTeamNavigation } from './team-navigation.tsx'
import { teamFactory } from './data/team-factory.ts'

export default {
  title: 'Component/CategoryTeamNavigation',
  component: CategoryTeamNavigation,
  args: {
    categoryName: 'Category',
    teams: [
      teamFactory({ name: 'Ploeg 1', bouw: 'onder' }),
      teamFactory({ name: 'Ploeg 2', bouw: 'onder' }),
      teamFactory({ name: 'Ploeg', bouw: 'boven' }),
    ],
  },
} satisfies Meta<typeof CategoryTeamNavigation>

export const Default: StoryObj<typeof CategoryTeamNavigation> = {}
export const WithHeader: StoryObj<typeof CategoryTeamNavigation> = {
  args: {
    header: 'Custom Header',
  },
}
