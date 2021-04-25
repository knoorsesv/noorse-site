it('should have a list with with all realisations', () => {
  cy.visit('/info/realisaties')
  cy.contains('h1', 'Realisaties en Focus Infrastructuur')
    .parentsUntil('#content-wrapper')
    .within(() => {
      cy.get('article').should('have.length', 4)
      cy.get('article').last().contains('Glenn Van De Putte')
      cy.get('article').last().contains('ex-seniorenbestuur')
      cy.get('article').last().contains('emailaddress@gmail.com')
      cy.get('article').last().contains('32499000999')
    })
})
