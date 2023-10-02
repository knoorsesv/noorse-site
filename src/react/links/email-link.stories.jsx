import { EmailLink } from './email-link.jsx'

const Template = (args) => <EmailLink {...args} />

export default {
  title: 'Links/EmailLink',
  component: EmailLink,
  args: {
    address: 'test@neurse.be',
  },
}

export const Default = Template.bind({})
