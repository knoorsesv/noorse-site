describe('Navigation', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  // todo: do this on small screen too

  it('should be possible to go to webshop from navbar', () => {
    cy.contains('Info').get('#dropdown').invoke('show')

    //todo: hovering doesn't really work yet, trigger hover and check next element is visible
    cy.contains('Webshop')
      // .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .and('have.prop', 'href')
      .and('equal', 'https://noorsesv.shop4clubs.eu/')
  })

  it('should be possible to go to static info pages', () => {
    cy.contains('Info').get('#dropdown').invoke('show')
    cy.contains('bestuur').should('have.attr', 'href', '/info/bestuur/')

    cy.contains('fairplay').should('have.attr', 'href', '/info/fairplay/')
    cy.contains('lidmaatschap').should(
      'have.attr',
      'href',
      '/info/lidmaatschap/'
    )
    cy.contains('sponsoring').should('have.attr', 'href', '/info/sponsoring/')
    cy.contains('documenten').should('have.attr', 'href', '/info/documenten/')
  })

  it('should be possible to go to generated info page', () => {
    cy.contains('Info').get('#dropdown').invoke('show')

    cy.contains('Covid Regels').should(
      'have.attr',
      'href',
      '/info/Covid Regels'
    )
  })

  it('should be possible to go to all category pages', () => {
    cy.get('nav').contains('Senioren').get('#dropdown').invoke('show')

    cy.contains('Ploegen').should('have.attr', 'href', '/senioren')
    cy.get('nav').contains('Jeugd').should('have.attr', 'href', '/jeugd')
    cy.get('nav')
      .contains('G-Voetbal')
      .should('have.attr', 'href', '/g-voetbal')
    cy.get('nav').contains('Meisjes').should('have.attr', 'href', '/meisjes')
    cy.get('nav').contains('Dames').should('have.attr', 'href', '/dames')
  })
})
