it('should generate page for contentful news item', () => {
  cy.visit('/nieuws/Nieuwe%20spelers%202020-2021')

  cy.contains('h1', 'Nieuwe spelers 2020-2021')
  cy.contains('donderdag 14 januari 2021')
  cy.contains('Na het jammere nieuws dat')
  //  todo: check all possible items, like images and stuff?
})
