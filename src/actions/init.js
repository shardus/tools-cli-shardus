const shardusInit = require('shardus-init')

module.exports = async (args, options, logger) => {
    await shardusInit(args['appName'], { runInstall: !options['noInstall'] })
}