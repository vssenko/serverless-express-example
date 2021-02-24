#!/usr/bin/env node
require('dotenv').config();
const isLocal = process.env.NODE_ENV === 'local';

if(isLocal){
  require('./start-local');
} else {
  require('./start-serverless');
}
