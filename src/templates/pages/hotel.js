import {props} from '../app'
import template from './hotel.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Hotel',
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
