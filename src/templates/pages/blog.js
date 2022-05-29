//import * as Handlebars from 'handlebars';

import blog from './blog.handlebars'
//import base from '../layouts/base'


const data = {
    title: 'Blog222'
    //base: bases({title: 'Blog 2222'})
    //app: blog()
}

export default blog(data)

/*
{{> header}}
{{> main}}
{{> footer}}*/
