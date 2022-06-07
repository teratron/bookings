import {props} from '../app'
import template from './hotel.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Hotel'
    },
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
