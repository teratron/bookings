const {merge} = require('webpack-merge')
const common = require('./config/webpack.common')
const paths = require('./config/paths')

const dev = require('./config/webpack.dev')
//console.log(dev)
module.exports = (env, argv) => {
    let config
    if (argv.mode === 'development') {
        //config.devtool = 'source-map';
        dev.then((r) => {
            config = r
        })

    }

    if (argv.mode === 'production') {
        //...
    }

    return config;
};

/*const config = merge(common(), {})

module.exports = new Promise(resolve => {
    resolve(config)
})*/
