/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  require('cypress-image-snapshot/plugin').addMatchImageSnapshotPlugin(
    on,
    config
  )

  const opts = webpackPreprocessor.defaultOptions
  const jsxRule = opts.webpackOptions.module.rules[0]
  const babelLoader = jsxRule.use[0]

  // jsxRule.test = '/\.(jsx|js)?$/'
  jsxRule.exclude = []
  // todo: this means a lot of compilation and a slow test
  jsxRule.include = [/src/, /gatsby/]
  babelLoader.options.presets.push('@babel/preset-react')

  // We can also push Babel istanbul plugin to instrument the code on the fly
  // and get code coverage reports from component tests (optional)
  if (!babelLoader.options.plugins) {
    babelLoader.options.plugins = []
  }
  // babelLoader.options.plugins.push('@babel/plugin-transform-react-jsx')

  // in order to mock named imports, need to include a plugin
  babelLoader.options.plugins.push([
    require.resolve('@babel/plugin-transform-modules-commonjs'),
    {
      loose: true,
    },
  ])

  opts.webpackOptions.module.rules.push({
    test: /\.css$/,
    exclude: [/node_modules/, /\.modules\.css$/i],
    use: ['style-loader', 'css-loader'],
  })

  // add code coverage plugin
  // require('@cypress/code-coverage/task')(on, config)

  on('file:preprocessor', webpackPreprocessor(opts))

  return config
}
