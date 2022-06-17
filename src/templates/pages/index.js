import {props} from '../app'
import template from './index.hbs'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Home'
    },
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
