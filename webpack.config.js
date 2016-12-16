'use strict'

if (process.argv.indexOf('--electron') > -1) {
  module.exports = require('./config/webpack.electron');
  return;
}

module.exports = require('./config/webpack.web');