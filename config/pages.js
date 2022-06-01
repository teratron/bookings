const paths = require('./paths')

const common = {
    inject: 'body',
    minify: false
}

module.exports = [
    {
        ...common,
        template: paths.src + '/templates/pages/index.js',
        filename: 'index.html'
    },
    {
        ...common,
        template: paths.src + '/templates/pages/about.js',
        filename: 'about.html'
    },
    {
        ...common,
        template: paths.src + '/templates/pages/blog.js',
        filename: 'blog.html'
    }
]

/*
import header from '../src/templates/partials/header.handlebars'
import Handlebars from 'handlebars';

Handlebars.registerHelper('Header', header);*/
