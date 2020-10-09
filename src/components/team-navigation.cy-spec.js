import '../output.css'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { CategoryTeamNavigation } from './team-navigation'
import { Link } from 'gatsby'

const FakeLink = ({ children, to, className, activeClassName }) => {
  return (
    <a
      to={to}
      className={`${className} ${
        children === 'activeLink' && `${activeClassName}`
      }`}
    >
      {children}
    </a>
  )
}

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

  describe('lots of teams given', () => {
    const sizes = ['iphone-4', 'iphone-6', 'ipad-2']

    before(() => {
      header = ''
      category = {
        naam: 'Categorie',
        ploeg: [
          { naam: 'eerste ploeg 1' },
          { naam: 'ploeg reserven 2' },
          { naam: 'ploeg 3' },
          { naam: 'ploeg jeugd 5' },
          { naam: 'ploeg 5' },
          { naam: 'ploeg 5' },
          { naam: 'ploeg 6' },
          { naam: 'ploeg 4' },
        ],
      }
    })

    sizes.forEach((size) => {
      it(`is displayed correctly on ${size}`, () => {
        cy.viewport(size)
        cy.get('#team-navigation').matchImageSnapshot(
          `team-navigation-list-${size}`
        )
      })
    })
  })

  describe('active link', () => {
    before(() => {
      header = ''
      category = {
        naam: 'Categorie',
        ploeg: [{ naam: 'activeLink' }, { naam: 'not active link' }],
      }
    })

    it(`is displayed correctly`, () => {
      cy.get('#team-navigation').matchImageSnapshot(
        `active-link-team-navigation`
      )
    })
  })
})
