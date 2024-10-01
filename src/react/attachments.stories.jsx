import { expect, within } from '@storybook/test'
import { Attachments } from './attachments.jsx'

const Template = (args) => <Attachments {...args} />

export default {
  title: 'Component/Attachments',
  component: Attachments,
  args: {
    attachments: [
      {
        title: 'Some Document',
        file: { url: 'test-url' },
      },
    ],
  },
}

export const SingleDocument = Template.bind({})
SingleDocument.args = {
  attachments: [
    {
      title: 'Some Document',
      file: { url: 'test-url' },
    },
    {
      title: 'Not shown image type 1',
      file: { url: 'test-url', contentType: 'image/jpeg' },
    },
    {
      title: 'Not shown image type 2',
      file: { url: 'test-url', contentType: 'image/png' },
    },
  ],
}

SingleDocument.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('Some Document')).toBeInTheDocument()
  await expect(
    canvas.queryByText('Not shown image type 1')
  ).not.toBeInTheDocument()
  await expect(
    canvas.queryByText('Not shown image type 2')
  ).not.toBeInTheDocument()
  await expect(canvas.getByText('Bijlage')).toBeInTheDocument()
}

export const MultipleDocuments = Template.bind({})
MultipleDocuments.args = {
  attachments: [
    {
      title: 'Some Document',
      file: { url: 'test-url' },
    },
    {
      title: 'Some Other Document',
      file: { url: 'test-url' },
    },
    {
      naam: 'Document with a name',
      file: { url: 'test-url' },
    },
  ],
}

MultipleDocuments.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('Some Document')).toBeInTheDocument()
  await expect(canvas.getByText('Some Other Document')).toBeInTheDocument()
  await expect(canvas.getByText('Some Other Document')).toBeInTheDocument()
  await expect(canvas.getByText('Bijlagen')).toBeInTheDocument()
}
