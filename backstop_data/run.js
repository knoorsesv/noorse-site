const backstop = require('backstopjs')
const customConfig = require('../backstop.json')
const baseUrl = process.env.BASE_URL || 'http://localhost:8000'

customConfig.scenarios.forEach((scenario) => {
  scenario.url = scenario.url.replace('http://localhost:8000', baseUrl)
})
customConfig.docker = true

backstop('test', { config: customConfig })
