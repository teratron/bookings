/*import Handlebars from 'handlebars'

Handlebars.registerHelper('path', function(url) {
    return './' + url
})*/

//export default Handlebars.path

export default function (url) {
    return './' + url
}

/*
Handlebars.registerHelper('path', function(...url) {
    let path = ''
    url.forEach(value => {
        return path.concat(value)
    })
    //url = Handlebars.escapeExpression(url)
    return path
})*/
