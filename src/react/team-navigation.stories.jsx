import { CategoryTeamNavigation } from './team-navigation.jsx'

const Template = (args) => <CategoryTeamNavigation {...args} />

export default {
  title: 'Component/CategoryTeamNavigation',
  component: CategoryTeamNavigation,
  args: {
    category: {
      naam: 'Category',
      ploeg: [{ naam: 'Ploeg 1' }, { naam: 'Ploeg 2' }, { naam: 'Ploeg' }],
    },
  },
}

export const Default = Template.bind({})
export const WithHeader = Template.bind({})

WithHeader.args = {
  header: 'Custom Header',
}
