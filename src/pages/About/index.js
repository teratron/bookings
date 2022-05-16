import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Header';
import Main from '../../components/Main';

export default function About() {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </React.Fragment>
    );
}
