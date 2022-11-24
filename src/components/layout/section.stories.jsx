import React from 'react'
import { Card } from '../cards.jsx'
import { Section } from './section.jsx'

export default {
  title: 'Layout/Section',
  component: Section,
}

const Template = (args) => (
  <>
    <Section {...args}>
      <Section.Title>Section Title</Section.Title>
      Some Section Content
    </Section>
    <Section {...args}>
      <Section.Title>Section With Card</Section.Title>
      <Card>Some Section Content</Card>
    </Section>
    <Section {...args}>
      <Section.Title>Section With Card And Centered</Section.Title>
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
  </>
)

export const Default = Template.bind({})
