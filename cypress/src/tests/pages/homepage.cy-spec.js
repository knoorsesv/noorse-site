describe('Home Page', function () {
  //
  // before(() => {
  //   cy.viewport(1800, 1800)
  // })

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
      })
  })

  it('should go to news item when clicking card', () => {
    cy.contains('Noorse gaat door met trainersduo')
      .parents('article')
      .as('card')

    //todo: get rid of wait
    cy.wait(500)

    cy.get('@card').click()

    cy.url().should(
      'contain',
      '/nieuws/Noorse%20gaat%20door%20met%20trainersduo'
    )
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
      .within(() => {
        cy.get('.lazyload-placeholder').should('have.length', 5)
      })
  })
})
