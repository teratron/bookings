import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Map from './pages/Map';
import Blog from './pages/Blog';
import About from './pages/About';

import Spinner from './components/Spinner';
import './static/scss/app.scss';

//const Home = React.lazy(() => import('./pages/Home'));
//const About = React.lazy(() => import('./pages/About'));

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="catalog" element={<Catalog/>}/>
                    <Route path="map" element={<Map/>}/>
                    <Route path="blog" element={<Blog/>}/>
                    <Route path="about" element={<About/>}/>
                </Routes>
            </div>
        </React.Suspense>
    );
}

export default App;
