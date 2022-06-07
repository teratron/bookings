import {props} from '../app'
import template from './map.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Map'
    }
}

export default template(context)
