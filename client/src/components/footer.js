import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import '../css/collabor8.css';
export default function Footer() {
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