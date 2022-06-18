import { props } from '../app'
import template from './index.hbs'

const arrGrid = []

for (let i = 1; i <= 12; i++) {
    arrGrid.push(i)
}

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Home'
    },
    header: {
        // navigation / search / none
        //search: true
        navigation: true
    },
    debugGrid: arrGrid
}

export default template(context)
