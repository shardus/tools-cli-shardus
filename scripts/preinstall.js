#!/usr/bin/env node

const { execSync } = require('child_process')

let errored = false

// Check node version >= 10.16.2
const nodeVersion = process.versions.node
if (nodeVersion.split('.')[0] !== '10') {
  console.error('\x1b[31m%s\x1b[0m', `Node.js version ${nodeVersion} is not supported. Please use a version within 10.x.x`)
  errored = true
}

// Check npm version >= 6.9.0
const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim()
if (npmVersion.split('.')[0] !== '6') {
  console.error('\x1b[31m%s\x1b[0m', `npm version ${npmVersion} is not supported. Please use a version within 6.x.x`)
  errored = true
}

if (errored) {
  console.error()
  process.exit(1)
}
