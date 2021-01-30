it('should have a list with documents which open on click', () => {
  cy.visit('/info/documenten')
  cy.contains('h1', 'Documenten')
    .parentsUntil('#content-wrapper')
    .within(() => {
      cy.contains('li', 'Test Document 1')
      cy.get('a')
        .should('contain', 'structuur')
        .and('have.attr', 'href')
        .and('match', /assets.*Structuur-2018-2019\.pdf/)
    })
})
