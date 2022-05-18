import * as React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

function Home() {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            home
            <Footer/>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </React.Fragment>
    );
}

export default Home;