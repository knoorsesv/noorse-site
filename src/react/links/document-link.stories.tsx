import { DocumentLink } from './document-link.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof DocumentLink>

const meta: Meta<typeof DocumentLink> = {
  title: 'Links/DocumentLink',
  component: DocumentLink,
  args: {
    url: 'test@neurse.be',
    fileName: 'test@neurse.be',
  },
}
export default meta

export const Default: Story = {}
