import { MarkDown } from './markdown'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MarkDown> = {
  title: 'Component/MarkDown',
  component: MarkDown,
  args: {
    content: `Markdown test _met bold_ en *italics* 
  
         > enzo


## Lijst
  * test
    * test
  * test


### Tasks
- [ ] test
- [x] test

    `,
  },
}
export default meta
type Story = StoryObj<typeof MarkDown>

export const Default: Story = {}
export const Collapsible: Story = {
  args: { sectionClassNames: 'collapsible-ul-sections' },
}
