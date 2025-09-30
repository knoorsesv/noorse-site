import { Logo } from './logo.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Images/Logo',
  component: Logo,
  args: {
    className: 'max-w-[96px]',
  },
} satisfies Meta<typeof Logo>

type Story = StoryObj<typeof Logo>

export const Default: Story = {}
