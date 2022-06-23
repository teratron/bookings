const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = props => {
    return {
        entry: {
            main: paths.src + '/index.js'
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults'
                                    }
                                ]
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread'
                            ]
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/i,
                    exclude: /node_modules/,
                    use: [
                        props.styleLoader,
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
                                        'postcss-preset-env'
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(hbs|handlebars)$/i,
                    exclude: /node_modules/,
                    loader: 'handlebars-loader',
                    options: {
                        helperDirs: [
                            paths.src + '/templates/helpers'
                        ],
                        partialDirs: [
                            paths.src + '/templates',
                            paths.src + '/templates/partials',
                            paths.src + '/templates/pages',
                            paths.src + '/templates/layouts'
                        ]
                    }
                },
                {
                    test: /\.(svg|gif|png|jpe?g)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: props.env
                            ? 'static/media/[name][ext]'
                            : 'static/media/[name].[hash][ext]'
                    }
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: props.env
                            ? 'static/fonts/[name][ext]'
                            : 'static/fonts/[name].[hash][ext]'
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
            ...require('fs')
                .readdirSync(paths.src + '/templates/pages')
                .filter(fileName => fileName.endsWith('.js'))
                .map(page => new HtmlWebpackPlugin({
                    template: paths.src + `/templates/pages/${page}`,
                    filename: page.replace(/.js/gi, '.html'),
                    inject: 'body',
                    minify: !props.env
                }))
        ],
        resolve: {
            modules: [paths.src, 'node_modules'],
            extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.sass'],
            alias: {
                '~': paths.src,
                '@': paths.src + '/static/js'
            }
        }
    }
}
