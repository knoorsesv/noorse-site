describe('Home Page', function () {
  beforeEach(() => {
    cy.visit('/')
    //  todo: intercept background image call so it doesn't need to load every time
  })

  it('should have a webshop section containing link', () => {
    cy.contains('h1', 'Webshop')
      .parents('section')
      .within(() => {
        cy.get('a')
          .should('have.attr', 'target', '_blank')
          .and('have.prop', 'href')
          .and('equal', 'https://www.qlub.com/qlub?club=k00332')
      })
  })

  it('should have a trooper section which links to Noorse trooper page', () => {
    cy.contains('h1', 'Trooper')
      .parents('section')
      .within(() => {
        cy.get('a')
          .should('have.attr', 'target', '_blank')
          .and('have.prop', 'href')
          .and('equal', 'https://www.trooper.be/noorse')
      })
  })

  it('should list news items', () => {
    cy.contains('h1', 'Nieuws')
      .parents('section')
      .within(() => {
        cy.get('article').should('have.length', 6)
        cy.contains('Nieuwe spelers 2020-2021')
        cy.contains('Anita Brand nieuwe T1 Noorse Dames')
        cy.contains('Samenwerking Corpus Fit')
        //  ...
      })
  })

  it('should go to news item when clicking card', () => {
    cy.contains('Nieuwe spelers 2020-2021')
      .parents('article')
      .as('newsCard')
      .should('have.attr', 'role', 'link')
    const click = ($el) => $el.click()
    //todo: do this with pipe instead of wait https://www.cypress.io/blog/2019/01/22/when-can-the-test-click/#header
    cy.get('@newsCard')
      .wait(500)
      .click()
      .then(() => {
        cy.url().should('contain', '/nieuws/Nieuwe%20spelers%202020-2021')
      })

    // .should(() => {
    //   expect(cy.url()).to.include('/nieuws/Nieuwe%20spelers%202020-2021')
    // })
  })

  it('should go to news item when selecting card and pressing key down', () => {
    // todo: should this be tested here or is the react a11y linting enough?
  })

  it('should list events', () => {
    cy.contains('h1', 'Evenementen')
      .parents('section')
      .within(() => {
        cy.contains('01/05/21')
        cy.contains('6 Tegen 6')
          .get('a')
          .should('have.attr', 'href')
          .and('match', /nieuws\/Beëindiging seizoen 2019-2020/)
      })
  })

  it('should list sponsors in footer', () => {
    cy.get('footer [title="List of Sponsors"]')
      .last()
      .scrollIntoView()
      // .should('be.visible')
      .within(() => {
        cy.get('.lazyload-placeholder').should('have.length', 5)
        // .scrollIntoView()scrollIntoViewß
      })
  })
})
