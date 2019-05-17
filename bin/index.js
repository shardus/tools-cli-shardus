#!/usr/bin/env node
const prog = require('caporal')
const actions= require('../actions')

prog
    .bin('shardus')
    .name('Shardus Tool')
    .version('1.0.0')
    // init command, to create a new sample project
    .command('init', 'Creates a sample shardus network project')
    .argument('<appName>', 'Project name')
    .action(actions.init)

    // start launcher tool
    .command('launcher', 'Starts the shardus network node launcher tool')
    .argument('[appName]', 'Shardus network project base dir')
    .action(actions.launcher)

    // executes get-logs tool
    .command('get-logs', 'Fetch the logs from a shardus network')
    .argument('<nodeUrl>', 'URL from any node on the network')
    .action(actions.getLogs)
    
prog.parse(process.argv);