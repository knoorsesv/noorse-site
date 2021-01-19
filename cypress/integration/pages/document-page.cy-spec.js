it('should have a list with documents which open on click', () => {
  cy.visit('/documenten')
  cy.contains('h1', 'Documenten')
    .parentsUntil('#content-wrapper')
    .within(() => {
      cy.get('a')
        .should('contain', 'Test Document 1')
        .and('have.attr', 'href')
        .and('match', /static.*Structuur-2018-2019\.pdf/)
    })
})
