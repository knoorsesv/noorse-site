import '../output.css'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { ContactInfo } from './contact'

describe('ContactInfo', () => {
  it('shows all contact info', () => {
    mount(<ContactInfo />)
    cy.contains('Frans de Peuterstraat 50')
    cy.get('#contact-info').matchImageSnapshot('contact-info')
  })
})
