import { Card } from '../cards.tsx'
import { Section } from './section.tsx'

export default {
  title: 'Layout/Section',
  component: Section,
}

const Template = (args) => (
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
)

export const Default = Template.bind({})
export const Small = Template.bind({})
export const Medium = Template.bind({})
export const Large = Template.bind({})
export const ExtraLarge = Template.bind({})

Small.parameters = {
  viewport: {
    defaultViewport: 'small',
  },
}
Medium.parameters = {
  viewport: {
    defaultViewport: 'medium',
  },
}
Large.parameters = {
  viewport: {
    defaultViewport: 'large',
  },
}
ExtraLarge.parameters = {
  viewport: {
    defaultViewport: 'extralarge',
  },
}
