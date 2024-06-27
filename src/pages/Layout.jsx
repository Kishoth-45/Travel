import { Outlet, Link } from "react-router-dom";
import '../Styles/travel.css';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <div>
                            <img src={require('../assets/images/travel-logo-2.jpg')} alt="" height="57px" />
                            <h2>Travel</h2>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbarc" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Destination'>Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Hotel'>Hotel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/About'>About</Link>
                            </li>
                        </ul>
                        <form className="d-flex ps-2">
                            <Link to='/Signin'><button className="btn signin">Signin</button></Link>
                        </form>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;
