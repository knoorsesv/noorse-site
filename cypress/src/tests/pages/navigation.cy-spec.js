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
      .and('equal', 'https://www.qlub.com/qlub?club=k00332')
  })

  it('should be possible to go to info pages', () => {
    cy.contains('Info').get('#dropdown').invoke('show')
    //todo: could this be done automatically to check if all generated pages have a link?
    cy.contains('Bestuur').should('have.attr', 'href', '/bestuur')
    cy.contains('Fair Play').should('have.attr', 'href', '/fairplay')
    cy.contains('Lidmaatschap').should('have.attr', 'href', '/lidmaatschap')
    cy.contains('Sponsoring').should('have.attr', 'href', '/sponsoring')
    cy.contains('Documenten').should('have.attr', 'href', '/documenten')
  })

  it('should be possible to go to all category pages', () => {
    cy.get('nav').contains('Senioren').should('have.attr', 'href', '/senioren')
    cy.get('nav').contains('Jeugd').should('have.attr', 'href', '/jeugd')
    cy.get('nav')
      .contains('G-Voetbal')
      .should('have.attr', 'href', '/g-voetbal')
    cy.get('nav').contains('Meisjes').should('have.attr', 'href', '/meisjes')
    cy.get('nav').contains('Dames').should('have.attr', 'href', '/dames')
  })
})
