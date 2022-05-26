const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

const config = merge(common({styleLoader: 'style-loader'}), {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'static/js/[name].bundle.js'
    },
    devServer: {
        static: paths.build,
        port: 9000,
        historyApiFallback: true,
        compress: true,
        open: true,
        hot: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
})

module.exports = new Promise((resolve) => {
    resolve(config)
})
