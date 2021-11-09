describe('Visual Test', function () {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Noorse Website',
      testName: 'HomePage',
      browser: [
        { width: 1024, height: 768, name: 'chrome' },
        { width: 480, height: 906, name: 'chrome' },
        { width: 320, height: 460, name: 'chrome' },
      ],
    })
  })

  afterEach(() => {
    cy.eyesClose()
  })

  it('Pages', () => {
    cy.visit('/')
    cy.eyesCheckWindow({
      tag: 'Home page',
    })

    cy.visit('/contact')
    cy.eyesCheckWindow({
      tag: 'Contact page',
    })

    cy.visit('/info/bestuur')
    cy.eyesCheckWindow({
      tag: 'Bestuur page',
    })

    cy.visit('/info/documenten')
    cy.eyesCheckWindow({
      tag: 'Document page',
    })

    cy.visit('/team/noorse 1')
    cy.eyesCheckWindow({
      tag: 'Team page',
    })

    cy.visit('/nieuws/Nieuwe%20spelers%202020-2021')
    cy.eyesCheckWindow({
      tag: 'News page',
    })
  })
})
