import React from "react";
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import whatsapp from "../img/whatsapp.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";

export default function Footer() {
 return (
  <footer className="footer">
   <p>&copy; 2024 HR Landing Page. All rights reserved.</p>
   <div className="card">
    <a className="socialContainer containerOne" href="#">
     <img src={instagram} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerTwo" href="#">
     <img src={facebook} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerThree" href="#">
     <img src={whatsapp} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerFour" href="#">
     <img src={twitter} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerFive" href="#">
     <img src={linkedin
     } className="socialSvg" alt="logo" />
    </a>
   </div>
  </footer>
 );
}