import React from 'react'
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
    <Section {...args}>Some Other Content</Section>
  </>
)

export const Default = Template.bind({})
