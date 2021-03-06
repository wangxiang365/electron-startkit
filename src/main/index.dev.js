/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */
// Set environment for development
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}
if (!process.env.BABEL_ENV) {
  process.env.BABEL_ENV = 'main'
}

// require("@babel/register")
if (process.env.COMPILER_ENV !== 'webpack') {
  require('module-alias/register')
}

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: false, devToolsMode: 'bottom' })

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })
})


// Require `main` process to boot app
require('./index')
