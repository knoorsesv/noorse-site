describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should show news items', () => {
    cy.get('.title').contains('Nieuws')
    cy.get('#news-list').contains(
      'Noorse gaat door met het trainersduo Davy Vercauteren en Jurgen Noels'
    )
    cy.get('#news-list').contains("Da't plezant was")

    cy.get('#news-list .card').should('have.lengthOf', 6)
  })

  it('should show event list', () => {
    cy.get(`.card`).contains('Evenementen')
    cy.get(`.card`).contains('13-08-2020')
    cy.get(`.card`).contains('Nieuwjaarsreceptie')
  })

  it('should show Trooper video', () => {
    const trooperEl = cy
      .get(`.card`)
      .contains('Steun onze vereniging vanaf nu via')

    trooperEl
      .get('a')
      .contains('Trooper')
      .should('have.attr', 'href', 'https://www.trooper.be/noorse')

    trooperEl.parentsUntil('.card').get('iframe')
  })
})
