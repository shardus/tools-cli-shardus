const shardusInit = require('shardus-init')
const shardusNetwork = require('shardus-network')
const shardusDebug = require('shardus-debug')

module.exports = {
  register: {
    ...shardusInit.register,
    network: ...shardusNetwork.register,
    debug: ...shardusDebug.register
  },
  lib: {
    ...shardusInit.lib,
    network: ...shardusNetwork.lib,
    debug: ...shardusDebug.lib
  }
}