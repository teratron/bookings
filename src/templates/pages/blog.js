//import Handlebars from 'handlebars'

//import '../index'
//import base from '../layouts/base.handlebars'
import blog from './blog.handlebars'
//import base from '../layouts/base'


//console.log(base)
//Handlebars.registerPartial('base', base);

const context = {
    title: 'Blog222'
    //base: bases({title: 'Blog 2222'})
    //app: blog()
}

export default blog(context)

/*
{{> header}}
{{> main}}
{{> footer}}*/
