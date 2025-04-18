import { sponsorFactory } from '../data/sponsor-factory.js'
import { SponsorPage } from './sponsor-page.jsx'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Pages/Sponsor',
  component: SponsorPage,
  args: {
    sponsors: [sponsorFactory(), sponsorFactory(), sponsorFactory()],
    description: 'Sponsor description',
  },
} satisfies Meta<typeof SponsorPage>

type Story = StoryObj<typeof SponsorPage>

export const Default: Story = {}
