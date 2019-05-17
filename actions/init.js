const shell = require('shelljs')
const fs = require('fs')
const path = require('path')
const samplePath = path.join(__dirname, '../samples/simpleApp')
const localPath = process.cwd()

module.exports = (args, options, logger) => {
    const newPath = path.join(localPath, args['appName'])
    if (fs.existsSync(newPath)) {
        logger.error(`Cannot create project, ${newPath} already exists`)
    } else {
        try {
            fs.mkdirSync(newPath)
            shell.cp('-R', `${samplePath}/*`, newPath)
            logger.info(`Project successfully created on ${newPath}`)
        } catch (error) {
            logger.error(error)
        }
    }
}