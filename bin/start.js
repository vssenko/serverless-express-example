#!/usr/bin/env node
require('dotenv').config();
const isLocal = process.env.NODE_ENV === 'local';

if(isLocal){
  module.exports = require('./start-local');
} else {
  module.exports = require('./start-serverless');
}
