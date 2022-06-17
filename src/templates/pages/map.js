import {props} from '../app'
import template from './map.hbs'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Map'
    }
}

export default template(context)
