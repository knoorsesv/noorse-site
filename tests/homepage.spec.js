const { test, expect } = require('@playwright/test')

test('basic test', async ({ page }) => {
  // await page.goto('/')
  await page.goto('www.google.com')
  const title = page.locator('nav li#menu-item:first-of-type')
  await expect(title).toHaveText('Home')
})
