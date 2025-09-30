import { TextBlock } from './text-block.js'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof TextBlock> = {
  title: 'Text/TextBlock',
  component: TextBlock,
  render: () => <TextBlock>Some text content</TextBlock>,
}
export default meta
type Story = StoryObj<typeof TextBlock>

export const Default: Story = {}
