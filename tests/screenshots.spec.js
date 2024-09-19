const { test, expect } = require('@playwright/test')

const pages = [
  { pageUrl: '/', takeFullPage: true },
  { pageUrl: '/info/nieuws' },
  { pageUrl: '/info/kalender' },
  { pageUrl: '/info/bestuur' },
  { pageUrl: '/nieuws/Alle Mogelijke Opties', takeFullPage: true },
  {
    pageUrl: '/team/senioren/eerste%20elftal',
    waitFor: '[alt="Ploegfoto Eerste Elftal"]',
  },
  { pageUrl: '/senioren' },
]

test.describe.parallel('Screenshot Test', () => {
  pages.forEach(({ pageUrl, takeFullPage, waitFor }) => {
    test(`for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)
      await page.waitForLoadState('networkidle')

      try {
        await (
          await page.$(waitFor || '[alt="Noorse Logo"]')
        ).waitForElementState('stable', { timeout: 5000 })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
      // todo: maybe scroll on big pages? / open navbar on mobile?
      expect(await page.screenshot({ fullPage: takeFullPage })).toMatchSnapshot(
        `page${pageUrl.replace('/', '-').replace('%20', '-')}.png`,
        {
          maxDiffPixelRatio: 0.05,
        }
      )
    })
  })
})
