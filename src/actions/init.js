const shardusInit = require('shardus-init')

module.exports = async (args, options, logger) => {
    await shardusInit(args['appName'], {
        templateRepo: args['templateRepo'] || 'https://gitlab.com/shardus/enterprise/tools/shardus-template.git',
        runInstall: !options['noInstall']
    })
}