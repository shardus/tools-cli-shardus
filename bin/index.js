#!/usr/bin/env node
const prog = require('caporal')
const actions= require('../src/actions')
const shardusNetwork = require('shardus-network')

prog
    .bin('shardus')
    .name('Shardus CLI')
    .version('1.0.0')
    // init command, to create a new sample project
    .command('init', 'Creates a sample shardus project')
    .argument('<appName>', 'Project name')
    .argument('[templateRepo]', 'Git repo containing a template created with hygen')
    .option('--no-install', 'Do not run npm install on the new sample project folder')
    .action(actions.init)

    // create command, to create a new shardus network
    .command('network create', 'Creates and configures a multiple nodes shardus network')
    .option('--default', 'Creates a sample shardus network project with default configuration values')
    .action(shardusNetwork.Actions.create)

    // Start network
    .command('network start', 'Start a shardus network on current path')
    .option('-p, --path <networkFolder>', 'Path for a folder containing the instances of a shardus network, defaults to pwd',  prog.STRING)
    .action(shardusNetwork.Actions.start)

    // List process pm2 proxy
    .command('network list', 'List all pm2 managed process')
    .option('-p, --path <networkFolder>', 'Path for a folder containing the instances of a shardus network, defaults to pwd',  prog.STRING)
    .action(shardusNetwork.Actions.list)
    
    // Stop node pm2 proxy
    .command('network stop', 'Stops given pm2 managed process by its name, pm2_id or <all>')
    .option('-p, --path <networkFolder>', 'Path for a folder containing the instances of a shardus network, defaults to pwd',  prog.STRING)
    .argument('<reference>', 'Process id, name or all')
    .action(shardusNetwork.Actions.stop)

    // Delete process pm2 proxy
    .command('network del', 'Stops and unregister given pm2 managed process by its name, pm2_id or <all>')
    .option('-p, --path <networkFolder>', 'Path for a folder containing the instances of a shardus network, defaults to pwd',  prog.STRING)
    .argument('<reference>', 'Process id, name or all')
    .action(shardusNetwork.Actions.del)

    // Reset process pm2 proxy
    .command('network reset', 'Resets given pm2 managed process by its name, pm2_id or <all>')
    .option('-p, --path <networkFolder>', 'Path for a folder containing the instances of a shardus network, defaults to pwd',  prog.STRING)
    .argument('<reference>', 'Process id, name or all')
    .action(shardusNetwork.Actions.reset)

    // Run a pm2 command
    .command('network pm2', 'Runs a pm2 command')
    .option('-p, --path <networkFolder>', 'Path for a folder containing the instances of a shardus network, defaults to pwd',  prog.STRING)
    .argument('[pm2Args...]', 'PM2 command arguments')
    .action(shardusNetwork.Actions.pm2)       
    
prog.parse(process.argv);