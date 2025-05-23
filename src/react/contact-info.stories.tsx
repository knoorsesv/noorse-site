import type { Meta, StoryObj } from '@storybook/react'

import { ContactInfo } from './contact-info.tsx'

const meta: Meta<typeof ContactInfo> = {
  title: 'Component/ContactInfo',
  component: ContactInfo,
}

export default meta

type Story = StoryObj<typeof ContactInfo>

export const Primary: Story = {}
