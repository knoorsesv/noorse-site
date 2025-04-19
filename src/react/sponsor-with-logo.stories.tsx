import type { Meta, StoryObj } from '@storybook/react'
import { SponsorWithLogo } from './sponsor-with-logo'
import { sponsorFactory } from './data/sponsor-factory'

export default {
  title: 'Component/SponsorWithLogo',
  component: SponsorWithLogo,
  args: {
    sponsor: sponsorFactory(),
  },
} satisfies Meta<typeof SponsorWithLogo>

type Story = StoryObj<typeof SponsorWithLogo>

export const Default: Story = {}
