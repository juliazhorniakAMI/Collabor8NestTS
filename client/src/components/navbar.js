import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import '../css/collabor8.css';
export default function Navbar() {
    return (
      <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway|Verdana|Montserrat" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/f6ef68423a.js" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="../css/collabor8.css" />
            </Helmet>
            <body>
                <div className="wch-spacer"></div>
                <header className="primary-header">
                    <div className="navIcon">
                        <NavLink className="navbar-brand" to="/">
                            Collabor8or
                        </NavLink>
                    </div><nav className="navGroup">
                        <button className="hamburger hamburger--vortex" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                        <ul className="navBar-Menu">
                            {/* <li><a href="#" >Home</a></li> */}
                            <li> <NavLink className="nav-link" to="/">
                                Home
                            </NavLink></li>
                            <li> <NavLink className="nav-link" to="/">
                                About
                            </NavLink></li>
                            <li>    <NavLink className="nav-link" to="/coll8rcreate">
                                Collabor8
                            </NavLink></li>
                            <li>  <NavLink className="nav-link" to="/">
                                Contact
                            </NavLink></li>
                            <li> <NavLink className="nav-link" to="/">
                                SignIn/SignUp
                            </NavLink></li>
                        </ul>
                    </nav>
                </header>
                </body>
        </>
    );
}