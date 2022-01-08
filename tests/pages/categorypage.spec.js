const { test, expect } = require('@playwright/test')

test.describe('Category Pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/senioren')
  })

  test('has category page for senioren teams', async ({ page }) => {
    const title = page.locator('#content h1')
    const ploegenSection = page.locator('section:has(h3:has-text("Ploegen"))')
    const nieuwsSection = page.locator('section:has(h2:has-text("Nieuws"))')
    const nieuwsItems = nieuwsSection.locator('li a')
    const ploegenLinks = ploegenSection.locator('a')
  })
})
