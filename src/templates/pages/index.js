import {props} from '../app'
import template from './index.hbs'

const arrGrid = []

for (let i = 1; i <= 12; i++) arrGrid.push(i)

const context = {
    ...props,
    title: props['title'] + ' - Home',
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    },
    pages: props['pages'].filter(fileName => fileName !== 'index'),
    debugGrid: arrGrid
}

export default template(context)
