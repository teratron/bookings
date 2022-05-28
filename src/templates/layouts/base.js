/*{{> header}}
{{> main}}
{{> footer}}*/
import Handlebars from 'handlebars'
import source from './base.handlebars'

//Handlebars.registerPartial ( 'myPartial' ,  '{{prefix}}' );

/*
let source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
*/

//console.log(source)

const data = {
    "name": "Alan",
    "hometown": "Somewhere, TX",
    "kids": [
        {
            "name": "Jimmy",
            "age": "12"
        },
        {
            "name": "Sally",
            "age": "4"
        }
    ]
};

const Base = Handlebars.compile(source);

//const base = Base(data)

export default Base(data);

//export default source;