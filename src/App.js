import * as React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import Spinner from './components/Spinner';
import './static/scss/app.scss';

//const Home = React.lazy(() => import('./pages/Home'));
//const About = React.lazy(() => import('./pages/About'));

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                </Routes>
            </div>
        </React.Suspense>
    );
}

export default App;
