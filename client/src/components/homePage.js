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
            </body>
        </>
    );
}