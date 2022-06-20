import {props} from '../app'
import template from './map.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Map'
}

export default template(context)
