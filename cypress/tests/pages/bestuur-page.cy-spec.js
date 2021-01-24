it('should have a list with documents which open on click', () => {
  cy.visit('/bestuur')
  cy.contains('h1', 'Bestuur')
    .parentsUntil('#content-wrapper')
    .within(() => {
      cy.get('article').should('have.length', 4)
      //todo: stub or use more obscure test data
      cy.get('article').last().contains('Glenn Van De Putte')
      cy.get('article').last().contains('ex-seniorenbestuur')
      cy.get('article').last().contains('vdputteglenn@gmail.com')
      cy.get('article').last().contains('////')
    })
})
