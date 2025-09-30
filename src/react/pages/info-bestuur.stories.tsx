import { InfoBestuurPage } from './info-bestuur.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'

// const Template = (args) => <InfoBestuurPage {...args} />

const meta: Meta<typeof InfoBestuurPage> = {
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

export default meta

type Story = StoryObj<typeof InfoBestuurPage>

export const Default: Story = {}
