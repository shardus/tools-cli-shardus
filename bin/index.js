#!/usr/bin/env node

const prog = require('caporal')
const shardusNetwork = require('@shardus/network-tool')
const shardusDebug = require('@shardus/debug-tool')
const packageJson = require('../package.json')

prog
  .bin('shardus')
  .name('Shardus CLI')
  .version(packageJson.version)

for (const command in shardusNetwork.register) shardusNetwork.register[command](prog)
for (const command in shardusDebug.register) shardusDebug.register[command](prog, 'debug')

prog.parse(process.argv)
