const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = (loader) => ({
    entry: paths.src + '/index.js',
    output: {
        path: paths.build,
        filename: 'static/js/[name].bundle.js',
        publicPath: '',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',
                                    'postcss-preset-env'
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpe?g)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    globOptions: {
                        ignore: [
                            '**/*.DS_Store',
                            '**/*.html'
                        ]
                    },
                    noErrorOnMissing: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Bookings',
            template: paths.public + '/template.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Bookings2',
            template: paths.public + '/template.html',
            filename: 'app.html'
        })
    ],
    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.css'],
        alias: {
            '@': paths.src,
            assets: paths.public,
        },
    }
})
