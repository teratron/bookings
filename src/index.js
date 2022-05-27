//import App from './App';
import './static/scss/index.scss'
import './static/media/logo.png'
import './static/media/logo.svg'
//import tmpl from './partial.header.tmpl'
//import Header from './partial.header.handlebars'

//document.body.innerHTML = '<img src="logo" alt="">'
//document.getElementById('root').append('logo')
//document.getElementById('root').innerText = 'Hello, World!'
//document.getElementById('root').innerHTML = '<img src="static/media/logo.svg" alt="">'
//document.getElementById('root').innerHTML = Header

//document.body.appendChild(header);

/*(() => {
    console.log('webpack worked')
})()*/

//console.log(typeof tmpl)


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('root').innerHTML = Header(/*{
        username: "test",
        info: "Your books are due next Tuesday",
        books: [
            { title: "A book", synopsis: "With a description" },
            { title: "Another book", synopsis: "From a very good author" },
            { title: "Book without synopsis" },
        ],
    }*/);
    //document.body.appendChild(div);
});