import { Container } from './container.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'

type Story = StoryObj<typeof Container>

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  render: ({ ...args }) => (
    <Container {...args}>
      <div style={{ backgroundColor: 'lightblue', height: '100px' }}>
        Container content
      </div>
    </Container>
  ),
}

export default meta

export const Default: Story = {}
export const NotCentered: Story = {
  args: {
    centered: false,
  },
}
