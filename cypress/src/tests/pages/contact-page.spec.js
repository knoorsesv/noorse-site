it('should have contact page', () => {
  cy.visit('/contact')
  cy.contains('h1', 'Konddddddddinklijke Noorse SV')
  cy.contains('h1', 'Contact')
  cy.contains('h1', 'Bereikbaarheid')
  cy.contains('h1', 'Kantine')
})
