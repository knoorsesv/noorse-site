const { test, expect } = require('@playwright/test')

test.describe('News Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/nieuws/nieuwe%20spelers%202020-2021')
  })

  test('shows news item content', async ({ page }) => {
    const title = page.locator('#content h1')
    const date = page.locator('#content h3')
    const firstParagraph = page.locator('#content p').first()

    await expect(title).toHaveText('Nieuwe spelers 2020-2021')
    await expect(date).toHaveText('donderdag 14 januari 2021')
    await expect(firstParagraph).toHaveText(
      'Na het jammere nieuws dat er dit seizoen niet meer gevoetbald wordt, beginnen we meteen uit te kijken naar het komende seizoen. We kunnen nu al meedelen dat deze spelers volgend jaar de kleuren van Noorse zullen verdedigen:'
    )
  })
})
