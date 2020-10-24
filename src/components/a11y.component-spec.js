import '../output.css'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Clickable } from './a11y'

const TestComponent = ({ ...props }) => {
  return (
    <div style={{ width: '200px', height: '200px' }} {...props}>
      Test
    </div>
  )
}

describe('Clickable Component', () => {
  let clickStub

  const WrappedTestComponent = ({ ...props }) =>
    Clickable(TestComponent, clickStub, props)

  beforeEach(() => {
    clickStub = cy.stub()
    mount(<WrappedTestComponent prop={'testProp'} className={'extra-class'} />)
    cy.contains('Test').as('getComponent')
  })

  it('should be clickable', () => {
    cy.get('@getComponent')
      .click()
      .then(() => {
        expect(clickStub).to.have.been.called
      })
  })

  it('should execute click function on key down', () => {
    cy.get('@getComponent')
      .focus()
      .type('{enter}')
      .then(() => {
        expect(clickStub).to.have.been.called
      })
  })

  it('should pass down props', () => {
    cy.get('@getComponent')
      .should('have.attr', 'prop', 'testProp')
      .should('have.class', 'extra-class')
  })

  it('should have accessibility attributes', () => {
    cy.get('@getComponent')
      .should('have.attr', 'role', 'link')
      .should('have.attr', 'tabIndex', '0')
      .should('have.class', 'cursor-pointer')
  })
})
