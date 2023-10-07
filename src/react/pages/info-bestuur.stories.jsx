import { InfoBestuurPage } from './info-bestuur.jsx'

const Template = (args) => <InfoBestuurPage {...args} />

export default {
  title: 'Pages/InfoBestuurPage',
  component: InfoBestuurPage,
  args: {
    leden: [
      {
        type: 'bestuursorgaan',
        title: 'Voorzitter',
        naam: 'Joske',
        email: 'voorzitter@neurse',
      },
      {
        type: 'bestuursorgaan',
        title: 'Iemand ans',
        naam: 'Jefke',
        email: 'voorzitter@neurse',
      },
      {
        type: 'deelwerking',
        title: 'Nog een deel',
        naam: 'Gerard',
        email: 'voorzitter@neurse',
      },
    ],
  },
}

export const Default = Template.bind({})
