import { UpdateBanner } from './update-banner.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Component/UpdateBanner',
  component: UpdateBanner,
} satisfies Meta<typeof UpdateBanner>

export const Default: StoryObj<typeof UpdateBanner> = {}
export const Fixed: StoryObj<typeof UpdateBanner> = {
  args: {
    fixed: true,
  },
}
