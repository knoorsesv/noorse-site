import { Title } from './title'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Title> = {
  title: 'Text/Title',
  component: Title,
  render: (args) => <Title {...args}>Some text content</Title>,
}

export default meta

type Story = StoryObj<typeof Title>

export const Default: Story = {}

export const H3: Story = {
  args: {
    as: 'h3',
  },
}
