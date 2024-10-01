import { expect, within } from '@storybook/test'
import { Card, SubHeader } from './cards.jsx'

const dummyImageUrl = 'https://dummyimage.com/200x100/87c425/1100ff'

const Template = (args) => (
  <Card {...args}>
    <SubHeader>Some subheader title</SubHeader>
    Some Card Content
  </Card>
)

export default {
  title: 'Component/Card',
  component: Card,
  args: {
    header: 'Title',
  },
}

export const Default = Template.bind({})
export const Small = Template.bind({})
export const WithImage = Template.bind({})
export const WithClassName = Template.bind({})
export const WithContainerClass = Template.bind({})

Small.args = {
  headerHeight: 'small',
}
WithContainerClass.args = {
  containerClass: 'p-12 bg-yellow-light',
}
WithClassName.args = {
  className: 'p-12 bg-yellow-light',
}
WithImage.args = {
  Image: () => <img src={dummyImageUrl} alt="Dummy" />,
}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText('Title')).toBeInTheDocument()
  await expect(canvas.getByText('Some subheader title')).toBeInTheDocument()
  await expect(canvas.getByText('Some Card Content')).toBeInTheDocument()
}

WithImage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByRole('img')).toBeInTheDocument()
  await expect(canvas.getByRole('img').getAttribute('src')).toEqual(
    dummyImageUrl
  )
}
