import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import '../css/collabor8.css';
// @ts-ignore
import Image1 from "../content/rivertrees.jpg";
// @ts-ignore
import Image2 from "../content/red-blue-flowers-scaled.jpg";
// Here, we display our Navbar
export default function HomePage() {
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
                            <li>    <NavLink className="nav-link" to="/collabor8r">
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
                <div className="wch-spacer"></div>
                <div className="bkGrndPic">
                    <div>
                        <h1>Welcome to Collabor8!</h1>
                        <h3>Be the Change You Wish to See in the World</h3>
                    </div>
                </div>
                <div className="wch-spacer"></div>
                <div>
                    <div>
                        <img
                            // @ts-ignore
                            src={Image1} className=" wch-twothird wch-container" alt="" /></div>
                    <div className="wch-third wch-container wch-blue centerText">
                        <div>
                            <h2>Our Purpose</h2>
                            <p className="p1">A place to come together</p>
                            <p className="p2">Collabor8 is a coming together spot for the world. Work on anything from a school project
                                to an international business venture.</p>
                            <input type="button" className="wch-button" value="Learn More" />
                        </div>
                    </div>
                </div>
                <div className="wch-spacer"></div>
                <div>
                    <div className="wch-third wch-container wch-blue centerText">
                        <div>
                            <h2>Prime Directive</h2>
                            <p className="p1">A place to come together</p>
                            <p className="p2">Collabor8 is a coming together spot for the world. Work on anything from a school project
                                to an international business venture.</p>
                            <input type="button" className="wch-button" value="Learn More" />
                        </div>
                    </div>
                    <div><img src={Image2} className=" wch-twothird wch-container" alt="" /></div>
                </div>
                <div className="wch-spacer"></div>
                <footer className="footer">
                    <div><hr className="bottomLine" /></div>
                    <ul>
                        <li><a href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook" id="facebookColor">
                            </i></a></li>
                        <li><a href="https://www.instagram.com/?hl=en">
                            <i className="fa-brands fa-instagram-square" ></i></a></li>
                        <li><a href="https://twitter.com/?lang=en">
                            <i className="fa-brands fa-twitter"
                            ></i></a></li>
                    </ul>
                    <div className="footertext">
                        <div className="footeritem">Earth | Email: contact@collabor8world</div>
                        <div className="footeritem">Copyright © 2022 COLLABOR8</div>
                    </div>
                </footer>
                {/* <script src="main.js"></script> */}
            </body>
        </>
    );
}