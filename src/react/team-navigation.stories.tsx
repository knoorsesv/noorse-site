import type { Meta, StoryObj } from '@storybook/react'
import { CategoryTeamNavigation } from './team-navigation.tsx'

export default {
  title: 'Component/CategoryTeamNavigation',
  component: CategoryTeamNavigation,
  args: {
    category: {
      naam: 'Category',
      ploeg: [
        { naam: 'Ploeg 1', bouw: 'onder' },
        { naam: 'Ploeg 2', bouw: 'onder' },
        { naam: 'Ploeg', bouw: 'boven' },
      ],
    },
  },
} satisfies Meta<typeof CategoryTeamNavigation>

export const Default: StoryObj<typeof CategoryTeamNavigation> = {}
export const WithHeader: StoryObj<typeof CategoryTeamNavigation> = {
  args: {
    header: 'Custom Header',
  },
}
