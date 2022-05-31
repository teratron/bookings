import {props} from '../app'
import template from './home.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Home'
    }
}

export default template(context)
