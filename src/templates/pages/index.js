import {props} from '../app'
import template from './index.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Home'
    }
    //header2: '164w8qw4d'
}

export default template(context)
