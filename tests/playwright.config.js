// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test')
require('dotenv').config()

const runOnCI = process.env.CI === 'true'
console.log(
  'running this on CI? ',
  runOnCI,
  process.env.PLAYWRIGHT_TEST_BASE_URL
)
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: runOnCI ? 'github' : [['list'], ['html', { open: 'never' }]],
  forbidOnly: !!runOnCI,
  retries: runOnCI ? 2 : 1,
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:8000',
    trace: 'on-first-retry',
  },
  timeout: 10 * 1000,
  projects: [
    {
      name: 'Functional',
      testIgnore: 'screenshots.spec.js',
      use: {
        screenshot: 'only-on-failure',
      },
    },
    {
      name: 'Screenshot Desktop',
      testMatch: 'screenshots.spec.js',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Schreenshot Mobile Chrome',
      testMatch: 'screenshots.spec.js',
      use: devices['Pixel 5'],
    },
    {
      name: 'Screenshot Mobile Safari',
      testMatch: 'screenshots.spec.js',
      use: devices['iPhone 12'],
    },
  ],
}

module.exports = config
