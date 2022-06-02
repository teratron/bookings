import Handlebars from 'handlebars';
import template from '../partials/header.handlebars'

const context = {
    title: ' - HEADER'
}

export default Handlebars.compile(template(context))
