import { SubTitle } from './sub-title'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SubTitle> = {
  title: 'Text/SubTitle',
  component: SubTitle,
  render: () => <SubTitle>Some text content</SubTitle>,
}
export default meta
type Story = StoryObj<typeof SubTitle>

export const Default: Story = {}
