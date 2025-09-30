import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResponsiveVideo } from './video.tsx'

export default {
  title: 'Component/Video',
  component: ResponsiveVideo,
  args: {
    src: 'https://www.youtube.com/embed/163vpPcW69Y',
  },
} satisfies Meta<typeof ResponsiveVideo>

export const Default: StoryObj<typeof ResponsiveVideo> = {}
