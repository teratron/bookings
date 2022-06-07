import {props} from '../app'
import template from './catalog.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Catalog'
    },
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
