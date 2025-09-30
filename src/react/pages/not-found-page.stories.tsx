import { NotFoundPage } from './not-found-page.jsx'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Pages/NotFound',
  component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>

type Story = StoryObj<typeof NotFoundPage>

export const Default: Story = {}
