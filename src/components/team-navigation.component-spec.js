import '../output.css'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { CategoryTeamNavigation } from './team-navigation'
import { Link } from 'gatsby'
import { FakeLink } from './test/fakes'

describe('CategoryTeamNavigation', () => {
  let header
  let category

  beforeEach(() => {
    cy.stub(React, 'createElement')
      .callThrough()
      .withArgs(Link)
      .callsFake((constructor, props, children) =>
        React.createElement(FakeLink, props, children)
      )

    mount(<CategoryTeamNavigation header={header} category={category} />)
  })

  describe('header and 1 team given', () => {
    before(() => {
      header = 'Header'
      category = { ploeg: [{ naam: 'ploegnaam' }] }
    })

    it('shows category header and list of teams', () => {
      cy.contains('Header')
      cy.contains('ploegnaam').should('have.attr', 'to', '/team/ploegnaam')
    })
  })

  describe('No header given', () => {
    before(() => {
      header = ''
      category = { naam: 'Categorie', ploeg: [{ naam: 'ploegnaam' }] }
    })

    it('shows category name', () => {
      cy.contains('Categorie')
    })
  })
})
