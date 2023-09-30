import React from 'react'
import { MarkDown } from './markdown.jsx'

const Template = () => (
  <MarkDown>
    {`Markdown test _met bold_ en *italics* 

       > enzo
  `}
  </MarkDown>
)

export default {
  title: 'Component/Markdown',
  component: MarkDown,
}

export const Default = Template.bind({})
