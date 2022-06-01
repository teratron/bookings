import Handlebars from 'handlebars';
import template from '../footer.handlebars'

//import './header.scss'

const context = {
        title: ' - HEADER****************'
}

//Handlebars.registerPartial('Header', Handlebars.compile(template(context)))

export default Handlebars.compile(template(context))
//export default header({})
//module.exports = header()
