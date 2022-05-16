import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import Home from '../../routes/Home';
import About from '../../routes/About';

import Spinner from '../Spinner';
import './app.scss';

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
