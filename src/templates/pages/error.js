import {props} from '../app'
import template from './error.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - 404'
    },
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)