it('should create an info page from contentful info', function () {
  cy.visit('/info/Covid Regels')

  cy.contains('h1', 'Covid Regels')
  cy.contains('Hieronder vindt u de belangrijkste maatregelen die Noorse')
  cy.contains('h3', 'Bijlage')
    .parent()
    .within(() => {
      cy.contains('a', 'Draaiboek Covid')
    })
})
