const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

const config = merge(common({styleLoader: 'style-loader'}), {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    //devtool: 'inline-source-map',
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
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        runtimeChunk: 'single'
    }
})

module.exports = new Promise((resolve) => {
    resolve(config)
})