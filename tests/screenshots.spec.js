const { test, expect } = require('@playwright/test')

const pages = [
  '/',
  '/nieuws/Nieuwe%20spelers%202020-2021/',
  '/info/nieuws/',
  '/team/noorse%201',
  '/info/kalender',
  '/senioren',
  '/contact',
  '/info/bestuur',
  '/info/lidmaatschap',
]

pages.forEach((pageUrl) => {
  test(`Screenshot test for ${pageUrl}`, async ({ page }) => {
    await page.goto(pageUrl)
    await page.waitForLoadState('networkidle')

    await (await page.$('#logo')).waitForElementState('stable')

    expect(
      await page.screenshot({ fullPage: false })
    ).toMatchSnapshot(`screenshot-${pageUrl.replace('/', '-')}.png`, {
      threshold: 0.8,
    })
  })
})
