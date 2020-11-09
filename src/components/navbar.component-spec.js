import '../output.css'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Navbar } from './navbar'
import { CoverImage, Logo } from './images'
import { Link } from 'gatsby'
import { FakeLink } from './test/fakes'

const siteMap = {
  items: [
    { name: 'Top Level Link', link: '/top' },
    { name: 'Top Level External Link', extLink: 'http://top-link' },
    {
      name: 'Top Level met Sub Items',
      subItems: [
        { name: 'Sub Item Link', link: '/sub' },
        { name: 'Sub Item Ext Link', extLink: 'http://sub-link' },
      ],
    },
  ],
}

const FakeCover = () => {
  return <div>what</div>
}

describe('Navbar', () => {
  let initialMenuState

  beforeEach(() => {
    cy.stub(React, 'createElement')
      .callThrough()
      .withArgs(CoverImage)
      .callsFake((constructor, props, children) =>
        React.createElement(FakeCover, props, children)
      )
      .withArgs(Logo)
      .callsFake((constructor, props, children) =>
        React.createElement(FakeCover, props, children)
      )
      .withArgs(Link)
      .callsFake((constructor, props, children) =>
        React.createElement(FakeLink, props, children)
      )

    mount(<Navbar siteMap={siteMap} initiallyShown={initialMenuState} />)
  })

  describe('on mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
    })

    it('is hidden by default', () => {
      cy.get('#sidebar-menu').should('not.be.visible')
    })

    it('opens by clicking hamburger', () => {
      cy.get('#menu-hamburger').should('have.class', 'fa-bars').click()
      cy.get('#sidebar-menu').should('be.visible')
    })

    describe('when menu is open', () => {
      before(() => {
        initialMenuState = true
      })

      it('Shows all links and sublinks', () => {
        cy.get('#sidebar-menu').within(() => {
          cy.get('a')
            .contains('Top Level Link')
            .should('have.attr', 'to', '/top')
          cy.get('a')
            .contains('Sub Item Link')
            .should('have.attr', 'to', '/sub')
          cy.get('a')
            .contains('Top Level External Link')
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'href', 'http://top-link')
          cy.get('a')
            .contains('Sub Item Ext Link')
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'href', 'http://sub-link')

          cy.get('span').should('contain', 'Top Level met Sub Items')
        })
      })

      it('closes by clicking cross', () => {
        cy.get('#menu-hamburger').should('have.class', 'fa-times').click()

        cy.get('#sidebar-menu').should('not.be.visible')
      })
    })
  })

  describe('on desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
    })

    it('Shows all links and items', () => {
      cy.get('#menu').within(() => {
        cy.get('a').contains('Top Level Link').should('have.attr', 'to', '/top')
        cy.get('a')
          .contains('Top Level External Link')
          .should('have.attr', 'target', '_blank')
          .should('have.attr', 'href', 'http://top-link')

        //todo: find way to trigger dropdown and check these are visible

        cy.get('a').contains('Sub Item Link').should('have.attr', 'to', '/sub')
        cy.get('a')
          .contains('Sub Item Ext Link')
          .should('have.attr', 'target', '_blank')
          .should('have.attr', 'href', 'http://sub-link')

        cy.get('span').should('contain', 'Top Level met Sub Items')
      })
    })
  })
})
