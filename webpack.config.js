const dev = require('./configs/webpack.dev')
const prod = require('./configs/webpack.prod')

module.exports = (_env, args) => {
    switch (args.mode) {
        case 'none':
        case 'development':
            return dev
        case 'production':
            return prod
        default:
            throw new Error('No matching configuration was found!')
    }
}
