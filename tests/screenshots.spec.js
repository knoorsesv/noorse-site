const { test, expect } = require('@playwright/test')


const pages = [
  '/',
  '/senioren',
  '/contact'
]
pages.forEach(pageUrl => {

  test(`Screenshot test for ${pageUrl}`, async ({ page }) => {
    await page.goto(pageUrl)
    await page.waitForLoadState('networkidle');
    
    // await page.locator('body').screenshot({ path: 'playwright/homepage.png' })
    expect(await page.screenshot()).toMatchSnapshot(`screenshot-${pageUrl.replace('/', '-')}.png`)
  })
})
