import {Link} from "react-router-dom";
import logo from "../../static/media/logo.svg";
import './footer.scss';

function Footer() {
    return (
        <footer className="app-footer bg-primary">
            <div className="container">
                <div className="row py-5">
                    <div className="col">
                        <img src={logo} className="logo" alt="logo" aria-label="Bootstrap"/>
                    </div>
                    <div className="col-6">
                        <div className="row row-cols-3">
                            <div className="col">
                                <h5>About Us</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <Link to="/#" className="nav-link p-0 text-muted">Home</Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="/#" className="nav-link p-0 text-muted">About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5>Contacts</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="tel:+38(063)52-71-831"
                                           className="nav-link p-0 text-muted">+38(063)52-71-831</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="mailto:bookings@gmail.com"
                                           className="nav-link p-0 text-muted">bookings@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5>Social</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><Link to="/#"
                                                                        className="nav-link p-0 text-muted">Home</Link>
                                    </li>
                                    <li className="nav-item mb-2"><Link to="/#"
                                                                        className="nav-link p-0 text-muted">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-light">Add hotel</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
