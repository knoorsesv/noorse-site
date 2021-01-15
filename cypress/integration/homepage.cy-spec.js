describe('Home Page', function () {
  beforeEach(() => {
    cy.visit('/')
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

  it('should have a trooper section which links to Noorse trooper page')

  it('should go to news item when clicking card')
  it('should go to news item when selecting card and pressing key down')
})
