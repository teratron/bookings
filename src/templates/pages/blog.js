import template from './blog.handlebars'

const context = {
    app: {
        title: 'Blog'
    }
}

export default template(context)
