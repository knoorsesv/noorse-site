import React from 'react'
import { InfoBestuurPage } from './info-bestuur.jsx'

const Template = (args) => <InfoBestuurPage {...args} />

export default {
  title: 'Pages/InfoBestuurPage',
  component: InfoBestuurPage,
  args: {
    leden: [
      {
        // todo: node should not be a part of this type
        node: {
          type: 'bestuursorgaan',
          title: 'Voorzitter',
          naam: 'Joske',
          email: 'voorzitter@neurse',
        },
      },
      {
        node: {
          type: 'bestuursorgaan',
          title: 'Iemand ans',
          naam: 'Jefke',
          email: 'voorzitter@neurse',
        },
      },
      {
        node: {
          type: 'deelwerking',
          title: 'Nog een deel',
          naam: 'Gerard',
          email: 'voorzitter@neurse',
        },
      },
    ],
  },
}

export const Default = Template.bind({})
