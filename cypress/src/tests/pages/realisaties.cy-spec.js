it('should have a list with with all realisations', () => {
  cy.visit('/info/realisaties')
  cy.contains('h1', 'Realisaties en Focus Infrastructuur')
    .parentsUntil('#content-wrapper')
    .within(() => {
      cy.get('article').should('have.length', 3)
      cy.get('article').last().contains('2018')
      cy.get('article').last().contains('Asfaltering rond terrein')
    })
})
