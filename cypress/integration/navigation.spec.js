describe('Home Page', function () {
  beforeEach(() => {
    cy.visit('/')
  })

  it('go to webshop from navbar', () => {
    cy.contains('Info').get('#dropdown').invoke('show')

    //todo: hovering doesn't really work yet, trigger hover and check next element is visible
    cy.contains('Webshop')
      // .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .and('have.prop', 'href')
      .and('equal', 'https://www.qlub.com/qlub?club=k00332')
  })
})
