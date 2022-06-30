import {props} from '../app'
import template from './index.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Home',
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    }
    //pages: props['pages'].filter(fileName => fileName !== 'index')
    //page: props['page'].filter(fileName => fileName.title !== 'index')
}

export default template(context)
