import { Title } from './title'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Title> = {
  title: 'Text/Title',
  component: Title,
  render: () => <Title>Some text content</Title>,
}
export default meta
type Story = StoryObj<typeof Title>

export const Default: Story = {}
