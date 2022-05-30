import template from './blog.handlebars'
import {props} from '../app'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Blog'
    }
}

export default template(context)