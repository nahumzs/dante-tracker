#!/bin/node
const path = require('path');
console.log('🤠 Welcome, creating config fiel');
const env = (process.env && process.env.NODE_ENV) || 'dev';
let config = null;
config = require('../src/.firebase.dev.json');
if (env === 'production') {
  config = require('../src/.firebase.production.json');
}

var fs = require('fs');
fs.writeFile(path.resolve(__dirname, "../src/.firebase.config.json"), JSON.stringify(config), 'utf8', () => {
  console.log(`🖖🏽 firebase ${env} config file created...`);
});
