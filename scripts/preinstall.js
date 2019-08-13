const { execSync } = require('child_process')
const compare = require('./semver-compare')

let errored = false

// Check node version >= 10.16.2
const nodeVersion = process.versions.node
if (compare(nodeVersion, '10.16.2') < 0) {
  console.error('\x1b[31m%s\x1b[0m', `Node.js version ${nodeVersion} is not supported. Please use a version >= 10.16.2`)
  errored = true
}

// Check npm version >= 6.9.0
const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim()
if (compare(npmVersion, '6.9.0') < 0) {
  console.error('\x1b[31m%s\x1b[0m', `npm version ${npmVersion} is not supported. Please use a version >= 6.9.0`)
  errored = true
}

if (errored) {
  console.error()
  process.exit(1)
}
