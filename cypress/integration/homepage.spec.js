describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const screenSizes = [
    {
      device: 'smartphone',
      width: 361,
      height: 640,
    },
    {
      device: 'tablet-landscape',
      width: 1024,
      height: 768,
    },
    {
      device: 'tablet',
      width: 640,
      height: 860,
    },
    {
      device: 'desktop',
      width: 1920,
      height: 1080,
    },
  ]

  screenSizes.forEach((screenSize) => {
    it(`Should match snapshot for ${screenSize.device}`, () => {
      cy.viewport(screenSize.width, screenSize.height)
      cy.root().toMatchImageSnapshot()
    })
  })

  it('Should show news items', () => {
    cy.get('.title').contains('Nieuws')
    cy.get('#news-list').within(() => {
      cy.contains("Da't plezant was")
      cy.contains(
        'Noorse gaat door met het trainersduo Davy Vercauteren en Jurgen Noels'
      )
      cy.get('.card').should('have.lengthOf', 6)
    })
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
