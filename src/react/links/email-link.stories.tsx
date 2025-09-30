import { EmailLink } from './email-link.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'

type Story = StoryObj<typeof EmailLink>

const meta: Meta<typeof EmailLink> = {
  title: 'Links/EmailLink',
  component: EmailLink,
  args: {
    address: 'test@neurse.be',
  },
}
export default meta

export const Default: Story = {}
