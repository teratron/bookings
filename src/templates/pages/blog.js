import { props } from '../app'
import template from './blog.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Blog'
    }
}

export default template(context)
