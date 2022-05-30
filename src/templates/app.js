/*import Handlebars from 'handlebars'
import app from './app.handlebars'
//import * as path from './helpers/path'

Handlebars.registerPartial('app', app)



export default app()*/

import packageJSON from '../../package.json'


export const props = {
    title: 'Bookings',
    description: 'Bookings - hotels etc.',
    keyword: 'bookings,hotel',
    publicURL: '',
    version: packageJSON.version
}



/*
function registerTemplates() {
    const partials = [
        'App',
        'AppStatus',
        'Tags',
        'Networks'
    ];

    partials.forEach((partial) => {
        Handlebars.registerPartial(partial, FS.readFileSync(`${__dirname}/html/partials/${partial}.html`, { encoding: 'utf8' }));
    });

    mainTemplate = Handlebars.compile(FS.readFileSync(`${__dirname}/html/Main.html`, { encoding: 'utf8' }));
    appTemplate = Handlebars.compile('{{> App}}');
    appStatusTemplate = Handlebars.compile('{{> AppStatus}}');
    tagsTemplate = Handlebars.compile('{{> Tags}}');
    networksTemplate = Handlebars.compile('{{> Networks}}');
}

partials.forEach(function (item) {
    let partialFile = __base + 'html/templates/partials/' + item + '.hbs';
    let partial = handlebars.compile(fs.readFileSync(partialFile, 'utf-8'));
    handlebars.registerPartial(item, partial);
});
*/

//export {path}

//Handlebars.registerPartial('app', app)

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
