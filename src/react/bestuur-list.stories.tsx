import type { Meta, StoryObj } from '@storybook/react'

import { BestuurList } from './bestuur-list.tsx'

const meta: Meta<typeof BestuurList> = {
  title: 'Component/BestuurList',
  component: BestuurList,
  args: {
    leden: [
      {
        title: 'Voorzitter',
        naam: 'Jan Jansen',
        email: 'e@mail.com',
      },
    ],
  },
}

export default meta

type Story = StoryObj<typeof BestuurList>

export const Default: Story = {}
