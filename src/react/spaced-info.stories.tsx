import { SpacedInfo } from './spaced-info'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SpacedInfo> = {
  title: 'Text/SpacedInfo',
  component: SpacedInfo,
  args: {
    items: [
      { label: 'Label', value: 'Value' },
      { label: 'Label', value: 'Value', email: 'email' },
    ],
  },
}
export default meta
type Story = StoryObj<typeof SpacedInfo>

export const Default: Story = {}
