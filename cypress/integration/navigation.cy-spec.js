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

  it('should be possible to go to bestuur page')
  it('should be possible to go to contact page')
  it('should be possible to go to all category pages')
  it('should be possible to go to lidmaatschap page')
  it('should be possible to go to documenten page')
  it('should be possible to go to sponsoring page')
})
