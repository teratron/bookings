import React from 'react';

import Spinner from '../Spinner';
import Header from '../Header';
import Footer from '../Header';
import Main from '../Main';
import './app.scss';

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </React.Suspense>
    );
}

export default App;
