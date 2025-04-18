import type { Meta, StoryObj } from '@storybook/react'
import { Version } from './version.tsx'

export default {
  title: 'Component/Version',
  component: Version,
  args: {
    version: '1.0.0',
  },
} satisfies Meta<typeof Version>

export const Default: StoryObj<typeof Version> = {}
