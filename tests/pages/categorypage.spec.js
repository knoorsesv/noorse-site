const { test, expect } = require('@playwright/test')

test.describe('Category Pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/senioren')
  })

  test('has category page for senioren teams', async ({ page }) => {
    page.locator('#content h1')
    const ploegenSection = page.locator('section:has(h3:has-text("Ploegen"))')
    const nieuwsSection = page.locator('section:has(h2:has-text("Nieuws"))')
    nieuwsSection.locator('li a')
    ploegenSection.locator('a')
  })

  test('has a navigation list with all senioren teams', async ({ page }) => {
    const navElement = page.locator('nav[aria-labelledby=team-navigation]')

    expect(navElement).toBeVisible()
    const links = navElement.locator('a')
    expect(await links.allTextContents()).toEqual([
      'Noorse 1',
      'Noorse 3',
      'Noorse 4',
      'Reserven A',
    ])

    await links.locator('text=Noorse 3').click()
    await page.waitForURL('**/team/**')

    expect(page.url()).toContain('/team/noorse%203')
  })
})
