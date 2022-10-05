// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test')
require('dotenv').config()

const runOnCI = process.env.CI === 'true'

let baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:9000'

if (!runOnCI && process.env.RUN_IN_DOCKER === 'true') {
  baseURL = baseURL.replace('localhost', 'host.docker.internal')
}

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: runOnCI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list'], ['html', { open: 'never' }]],
  forbidOnly: !!runOnCI,
  retries: runOnCI ? 3 : 0,
  workers: runOnCI ? 4 : 1,
  use: {
    baseURL,
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
      name: 'Screenshot Large',
      testMatch: 'screenshots.spec.js',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Schreenshot Small',
      testMatch: 'screenshots.spec.js',
      use: devices['iPhone 13'],
    },
    {
      name: 'Screenshot Medium',
      testMatch: 'screenshots.spec.js',
      use: devices['Nexus 5X landscape'],
    },
  ],
}

// console.log('running test with config ', config)

module.exports = config
