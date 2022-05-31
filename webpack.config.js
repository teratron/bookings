const {merge} = require('webpack-merge')
const common = require('./config/webpack.common')
const paths = require('./config/paths')

const config = merge(common(), {})

module.exports = new Promise(resolve => {
    resolve(config)
})
