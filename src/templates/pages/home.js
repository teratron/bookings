import template from './home.handlebars'
import {props} from '../app'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Home'
    }
}

export default template(context)
