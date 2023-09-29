import React from 'react'
import { ExternalLink } from './external-link.jsx'

const Template = (args) => (
  <ExternalLink {...args} href="http://www.noorse.be">
    Go Outside
  </ExternalLink>
)

export default {
  title: 'Links/ExternalLink',
  component: ExternalLink,
  argTypes: {
    icon: false,
    styled: true,
    altText: 'Link naar site',
    textColor: '',
  },
}

export const LinkWithIcon = Template.bind({})
LinkWithIcon.args = {
  icon: true,
}

export const LinkWithoutIcon = Template.bind({})
LinkWithoutIcon.args = {
  icon: false,
}

export const UnstyledLink = Template.bind({})
UnstyledLink.args = {
  styled: false,
}

export const LinkWithTextColor = Template.bind({})
LinkWithTextColor.args = {
  textColor: 'text-green',
}
