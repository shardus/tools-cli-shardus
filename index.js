const shardusNetwork = require('shardus-network')
const shardusDebug = require('shardus-debug')

module.exports = {
  register: {
    network: ...shardusNetwork.register,
    debug: ...shardusDebug.register
  },
  lib: {
    network: ...shardusNetwork.lib,
    debug: ...shardusDebug.lib
  }
}
