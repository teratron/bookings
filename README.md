# Bookings

### HtmlWebpackPlugin

[https://github.com/jantimon/html-webpack-plugin#plugins](https://github.com/jantimon/html-webpack-plugin#plugins)\
[https://github.com/jantimon/html-webpack-plugin#options](https://github.com/jantimon/html-webpack-plugin#options)\
[https://github.com/jantimon/html-webpack-plugin/tree/main/examples](https://github.com/jantimon/html-webpack-plugin/tree/main/examples)

### Handlebars

[https://mustache.github.io/mustache.5.html](https://mustache.github.io/mustache.5.html)\
[https://github.com/handlebars-lang/handlebars.js](https://github.com/handlebars-lang/handlebars.js)\
[https://handlebarsjs.com/guide/partials.html#dynamic-partials](https://handlebarsjs.com/guide/partials.html#dynamic-partials)\
[https://habr.com/ru/post/273581/](https://habr.com/ru/post/273581/)\
[https://metanit.com/web/nodejs/4.19.php](https://metanit.com/web/nodejs/4.19.php)\
[https://github.com/pcardune/handlebars-loader/tree/main/examples](https://github.com/pcardune/handlebars-loader/tree/main/examples)\
[http://tryhandlebarsjs.com/](http://tryhandlebarsjs.com/)\
https://www.tabnine.com/code/javascript/functions/handlebars/registerPartial

```sh
npm run start
```

```sh
npm run build
```

```javascript
var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

var template = Handlebars.compile(source);

var context = {
    "name": "Alan", "hometown": "Somewhere, TX",
    "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]
};

var result = template(context);

// Would render:
// <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>
// <ul>
//   <li>Jimmy is 12</li>
//   <li>Sally is 4</li>
// </ul>
```