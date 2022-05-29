import Handlebars from 'handlebars'
import template from './base.handlebars'

Handlebars.registerPartial('base', template)

const data = {
    username: "test",
    info: "Your books are due next Tuesday"
}

//export default template(data)
export default Handlebars.template(base)

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
