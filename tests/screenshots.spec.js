const { test, expect } = require('@playwright/test')

const pages = [
  '/',
  '/info/nieuws',
  '/info/kalender',
  '/info/bestuur',
  '/nieuws/Alle Mogelijke Opties',
  '/team/senioren/Eerste Elftal',
  '/senioren',
]

const takeFullPage = ['/nieuws/Alle Mogelijke Opties', '/']

test.describe.parallel('Screenshot Test', () => {
  pages.forEach((pageUrl) => {
    test(`for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)
      await page.waitForLoadState('networkidle')

      // try {
      //   await (
      //     await page.$('[alt="Noorse Logo"]')
      //   ).waitForElementState('stable', { timeout: 5000 })
      // } catch (e) {
      //   // eslint-disable-next-line no-console
      //   console.error(e)
      // }
      // todo: maybe scroll on big pages? / open navbar on mobile?
      expect(
        await page.screenshot({ fullPage: takeFullPage.includes(pageUrl) })
      ).toMatchSnapshot(`page${pageUrl.replace('/', '-')}.png`, {
        maxDiffPixelRatio: 0.05,
      })
    })
  })
})
