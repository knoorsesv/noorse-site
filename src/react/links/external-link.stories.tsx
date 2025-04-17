import { ExternalLink } from './external-link'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ExternalLink> = {
  title: 'Links/ExternalLink',
  component: ExternalLink,
  args: {
    icon: false,
    styled: true,
    altText: 'Link naar site',
    textColor: '',
  },
  render: ({ ...args }) => (
    <ExternalLink {...args} href="http://www.noorse.be">
      Go Outside
    </ExternalLink>
  ),
}

export default meta

type Story = StoryObj<typeof ExternalLink>

export const LinkWithIcon: Story = {
  args: {
    icon: true,
  },
}

export const LinkWithoutIcon: Story = {
  args: {
    icon: false,
  },
}

export const UnstyledLink: Story = {
  args: {
    styled: false,
  },
}

export const LinkWithTextColor: Story = {
  args: {
    textColor: 'text-green',
  },
}
