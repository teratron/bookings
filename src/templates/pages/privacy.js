import {props} from '../app'
import template from './privacy.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Privacy'
    },
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
