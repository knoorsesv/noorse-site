import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Card } from './cards.tsx'

const dummyImageUrl = 'https://dummyimage.com/200x100/87c425/1100ff'

export default {
  title: 'Component/Card',
  component: Card,
  args: {
    header: 'Title',
  },
  render: (args) => <Card {...args}>Some Card Content</Card>,
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Title')).toBeInTheDocument()
    await expect(canvas.getByText('Some Card Content')).toBeInTheDocument()
  },
}
export const Small: Story = {
  args: {
    headerHeight: 'small',
  },
}
export const WithImage: Story = {
  args: {
    Image: () => <img src={dummyImageUrl} alt="Dummy" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img')).toBeInTheDocument()
    await expect(canvas.getByRole('img').getAttribute('src')).toEqual(
      dummyImageUrl
    )
  },
}
export const WithClassName: Story = {
  args: {
    className: 'p-12 bg-yellow-light',
  },
}
export const WithContainerClass: Story = {
  args: {
    containerClass: 'p-12 bg-yellow-light',
  },
}
