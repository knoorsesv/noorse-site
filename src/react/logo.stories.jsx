import { Logo } from './logo.tsx'

const Template = (args) => <Logo {...args} />

export default {
  title: 'Images/Logo',
  component: Logo,
  args: {
    className: 'max-w-[96px]',
  },
}

export const NoorseLogo = Template.bind({})
