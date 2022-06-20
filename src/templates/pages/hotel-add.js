import {props} from '../app'
import template from './hotel-add.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Add Hotel',
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
