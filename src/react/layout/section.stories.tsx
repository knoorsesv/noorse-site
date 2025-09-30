import { Card } from '../cards.tsx'
import { Section } from './section.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'

type Story = StoryObj<typeof Section>

// todo: split these in separate stories
const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  render: ({ ...args }) => (
    <Section.List>
      <Section {...args}>
        <Section.Title>Section Title</Section.Title>
        Some Section Content
      </Section>
      <Section {...args}>
        <Section.Title>Section With Card</Section.Title>
        <Card>Some Section Content</Card>
      </Section>
      <Section {...args}>
        <Section.Title> Centered Card</Section.Title>
        <Card>
          <Section.TextContent>
            Some Centered Text Content Content
          </Section.TextContent>
        </Card>
      </Section>
      <Section {...args}>Some Other Content</Section>
      <Section {...args}>
        <Section.TextContent>
          Some Centered Text Content Content
        </Section.TextContent>
      </Section>
    </Section.List>
  ),
}

export default meta

export const Default: Story = {}
