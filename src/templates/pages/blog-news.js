import {props} from '../app'
import template from './blog-news.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Blog News',
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
}

export default template(context)
