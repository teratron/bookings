import {props} from '../app'
import template from './privacy.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Privacy',
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
