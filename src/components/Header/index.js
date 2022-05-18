//import LoginControl from '../Login';
import {Link} from "react-router-dom";
import logo from '../../static/media/logo.svg';
import './header.scss';

function Header() {
    return (
        <header className="app-header bg-primary">
            <div
                className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    {/*<svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg>*/}
                    <img src={logo} className="logo bi me-2" alt="logo" aria-label="Bootstrap"/>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/#" className="nav-link px-2 link-secondary">Home</a></li>
                    <li><a href="/#" className="nav-link px-2 link-dark">Features</a></li>
                    <li><a href="/#" className="nav-link px-2 link-dark">Pricing</a></li>
                    <li><a href="/#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="/#" className="nav-link px-2 link-dark">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </div>
            {/*<nav className="navbar navbar-dark fixed-top">
            </nav>
            <div>
                <img src={logo} className="logo" alt="logo"/>
                <h1 className="title">Page Title</h1>
            </div>*/}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
        /*        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            <use xlink:href="#bootstrap"></use>
                        </svg>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </header>*/
    );
}

export default Header;
