#!/usr/bin/env node
require('dotenv').config();
const serverlessExpress = require('@vendia/serverless-express');
const app = require('../src/app');

console.log('App: Starting serverless.');
exports.handler = serverlessExpress({ app });
