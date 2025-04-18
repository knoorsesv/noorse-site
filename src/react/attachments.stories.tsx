import { expect, within } from '@storybook/test'
import { Attachments } from './attachments.tsx'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Component/Attachments',
  component: Attachments,
  args: {
    attachments: [
      {
        title: 'Some Document',
        file: { url: 'test-url', contentType: 'doc', fileName: 'document.pdf' },
      },
    ],
  },
} satisfies Meta<typeof Attachments>

type Story = StoryObj<typeof Attachments>

export const SingleDocument: Story = {
  args: {
    attachments: [
      {
        title: 'Some Document',
        file: { url: 'test-url', contentType: 'doc', fileName: 'document.pdf' },
      },
      {
        title: 'Not shown image type 1',
        file: {
          url: 'test-url',
          contentType: 'image/jpeg',
          fileName: 'image.jpg',
        },
      },
      {
        title: 'Not shown image type 2',
        file: {
          url: 'test-url',
          contentType: 'image/png',
          fileName: 'image.jpg',
        },
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Some Document')).toBeInTheDocument()
    await expect(
      canvas.queryByText('Not shown image type 1')
    ).not.toBeInTheDocument()
    await expect(
      canvas.queryByText('Not shown image type 2')
    ).not.toBeInTheDocument()
    await expect(canvas.getByText('Bijlage')).toBeInTheDocument()
  },
}

export const MultipleDocuments: Story = {
  args: {
    attachments: [
      {
        title: 'Some Document',
        file: { url: 'test-url', fileName: 'image.jpg', contentType: 'doc' },
      },
      {
        title: 'Some Other Document',
        file: { url: 'test-url', fileName: 'image.jpg', contentType: 'doc' },
      },
      {
        file: { url: 'test-url', fileName: 'document.pdf', contentType: 'doc' },
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Some Document')).toBeInTheDocument()
    await expect(canvas.getByText('Some Other Document')).toBeInTheDocument()
    await expect(canvas.getByText('Bijlagen')).toBeInTheDocument()
  },
}
