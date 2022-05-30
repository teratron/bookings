import Handlebars from 'handlebars'
import app from './app.handlebars'

Handlebars.registerPartial('app', app)

// const Handlebars = require('handlebars')
// const base = require('../src/templates/pages/blog.handlebars')
// console.log(base)
// Handlebars.registerPartial('base', Handlebars.compile(base))

// Webpack require:
//var partial = require('./partial.html');
//var universal = require('./universial.js');

// Export a function / promise / or a string:
// This function has to return a string or promised string:
/*module.exports = function (templateParams) {
    var html = '<html><head>' +
        '<title>' + templateParams.htmlWebpackPlugin.options.title + '</title>' +
        '</head><body>' + universal() + ' - ' + partial + '</body></html>';

    return html;
};*/
