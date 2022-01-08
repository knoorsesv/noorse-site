// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test')
require('dotenv').config()

console.log('running this on CI? ', process.env.CI)
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: process.env.CI
    ? 'github'
    : [['list'], ['html', { open: process.env.CI ? 'never ' : 'on-failure' }]],
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:8000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Functional',
      testIgnore: 'screenshots.spec.js',
    },
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
}

module.exports = config
