import {props} from '../app'
import template from './hotel-add.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Add Hotel'
    },
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
