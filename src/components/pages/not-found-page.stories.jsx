import React from 'react'
import { NotFoundPage } from './not-found-page.jsx'

const Template = (args) => <NotFoundPage {...args} />

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  args: {},
}

export const Default = Template.bind({})
