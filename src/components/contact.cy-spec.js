import '../output.css'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { ContactInfo } from './contact'

const ContactInContainer = () => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <ContactInfo />
    </div>
  )
}

describe('ContactInfo', () => {
  it('shows all contact info', () => {
    mount(<ContactInContainer />)
    cy.contains('Frans de Peuterstraat 50')
    cy.get('#contact-info').matchImageSnapshot('contact-info')
  })
})
