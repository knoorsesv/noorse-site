describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const cardSelector = '[data-cy=card]'
  const titleSelector = '[data-cy=title]'

  it('Should show news items', () => {
    cy.get(titleSelector).contains('Nieuws')
    cy.get('#news-list').within(() => {
      cy.contains("Da't plezant was")
      cy.contains(
        'Noorse gaat door met het trainersduo Davy Vercauteren en Jurgen Noels'
      )
      cy.get(cardSelector).should('have.lengthOf', 6)
    })
  })

  it('should show event list', () => {
    cy.get(cardSelector).contains('Evenementen')
    cy.get(cardSelector).contains('13-08-2020')
    cy.get(cardSelector).contains('Nieuwjaarsreceptie')
  })

  it('should show Trooper video', () => {
    const trooperEl = cy
      .get(cardSelector)
      .contains('Steun onze vereniging vanaf nu via')

    trooperEl
      .get('a')
      .contains('Trooper')
      .should('have.attr', 'href', 'https://www.trooper.be/noorse')
  })
})
