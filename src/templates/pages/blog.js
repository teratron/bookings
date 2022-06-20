import {props} from '../app'
import template from './blog.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Blog'
}

export default template(context)
