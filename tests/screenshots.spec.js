const { test, expect } = require('@playwright/test')

const pages = [
  '/',
  '/nieuws/Nieuwe spelers 2020-2021',
  '/info/nieuws',
  '/team/Noorse 1',
  '/info/kalender',
  '/senioren',
  '/contact',
  '/info/bestuur',
  '/info/lidmaatschap',
]

test.describe.parallel('Screenshot Test', () => {
  pages.forEach((pageUrl) => {
    test(`for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)
      await page.waitForLoadState('networkidle')

      await (await page.$('#logo')).waitForElementState('stable')

      expect(await page.screenshot({ fullPage: false })).toMatchSnapshot(
        `page-${pageUrl.replace('/', '-')}.png`,
        {
          threshold: 0.8,
        }
      )
    })
  })
})
