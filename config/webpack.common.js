const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = (params) => ({
    entry: paths.src + '/index.js',
    output: {
        path: paths.build,
        publicPath: 'auto',
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
                    params.styleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
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
                test: /\.(svg|gif|png|jpe?g)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name].[hash][ext]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[name].[hash][ext]'
                }
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
            filename: 'index.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            title: 'Bookings2',
            template: paths.public + '/template.html',
            filename: 'app.html'
        })
    ],
    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass'],
        alias: {
            '@': paths.src,
            assets: paths.public,
        }
    }
})
