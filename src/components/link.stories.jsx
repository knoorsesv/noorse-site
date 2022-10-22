import React from 'react'
import { ExternalLink } from './text.jsx'

const Link = (args) => (
  <ExternalLink {...args} url="http://www.noorse.be">
    Go Outside
  </ExternalLink>
)

export default {
  title: 'Text/Link',
  component: ExternalLink,
  argTypes: {
    icon: false,
    styled: true,
    altText: 'Link naar site',
    textColor: '',
  },
}

export const LinkWithIcon = Link.bind({})
LinkWithIcon.args = {
  icon: true,
}

export const LinkWithoutIcon = Link.bind({})
LinkWithoutIcon.args = {
  icon: false,
}

export const UnstyledLink = Link.bind({})
UnstyledLink.args = {
  styled: false,
}

export const LinkWithTextColor = Link.bind({})
LinkWithTextColor.args = {
  textColor: 'text-green',
}
